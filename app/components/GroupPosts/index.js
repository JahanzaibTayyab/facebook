import React, { useEffect } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { FetchGroupPostsRequest } from '../../actions/groupPostsActions'
import GroupPostItem from './GroupPostItem'
function index(props) {
    useEffect(() => {
        const { fetchGroupPosts, isInGroup } = props
        if (!!!isInGroup) {
            fetchGroupPosts()
        }
    }, []);
    const { groupPosts, isInGroup, groupId } = props
    if (isInGroup) {
        if (groupPosts.inGroup.length > 0
            && groupPosts.inGroup[0].group.id !== groupId
            || groupPosts.inGroup.length === 0) {
            const { fetchGroupPosts } = this.props
            fetchGroupPosts(groupId)
            return <View></View>
        }
    } else {
        if (groupPosts.allGroups.length === 0) {
            return <View></View>
        }
    }
    return (
        <View style={styles.container}>
            {isInGroup ? (
                <>
                    {
                        groupPosts.inGroup.map((item, index) => (
                            <GroupPostItem isInGroup={isInGroup ?? false} key={index} item={item} />
                        ))
                    }
                </>
            ) : (
                    <>
                        {
                            groupPosts.allGroups.map((item, index) => (
                                <GroupPostItem isInGroup={isInGroup ?? false} key={index} item={item} />
                            ))
                        }
                    </>
                )}
        </View>
    )
}
const mapStateToProps = () => {
    return {
        groupPosts
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchGroupPosts: (id = null) => dispatch(FetchGroupPostsRequest(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(index)
const styles = StyleSheet.create({
    container: {

    }
})
