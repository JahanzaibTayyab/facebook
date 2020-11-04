import React, { useEffect } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { FetchCategoryGroupListRequest } from '../../actions/categoryGroupListActions'
import JoinGroupListItem from './JoinGroupListItem'


export default function CategoryGroupList(props) {
    useEffect(() => {
        const { groupIDs } = props
        const { fetchCategoryGroupList } = props
        fetchCategoryGroupList(groupIDs)
    }, []);
    const { categoryGroupList } = props
    if (categoryGroupList.length === 0) return <View></View>
    return (
        <View style={{ paddingVertical: 7.5 }}>
            {categoryGroupList.map((group, index) => (
                <JoinGroupListItem groupDetail={group} key={index} />
            ))}
        </View>
    )
}
const mapStateToProps = () => {
    return {
        categoryGroupList: categoryGroupList
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchCategoryGroupList: (arrID) => dispatch(FetchCategoryGroupListRequest(arrID))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryGroupList)
const styles = StyleSheet.create({})
