import React, { useEffect } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { FetchGroupCategoriesRequest } from '../../actions/groupCategoriesActions'
import GroupCategoryItem from './GroupCategoryItem'
function index(props) {

    useEffect(() => {
        const { fetchGroupCategories } = props
        fetchGroupCategories()
    }, []);
    const { groupCategories } = props
    if (groupCategories.length === 0) return <View></View>
    return (
        <ScrollView style={styles.container} bounces={false}>
            {groupCategories.map((category, index) => (
                <View key={index}>
                    {category.isPopular && (
                        <GroupCategoryItem category={category} key={index} />
                    )}
                </View>
            ))}
        </ScrollView>
    )
}
const mapStateToProps = () => {
    return {
        groupCategories
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchGroupCategories: () => dispatch(FetchGroupCategoriesRequest(1))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(index)
const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        borderBottomColor: '#ddd',
        borderBottomWidth: 0.2,
    }
})
