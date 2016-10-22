var module = angular.module('frontpress.apis.categories');

function CategoriesApi(AjaxModel, $Frontpress, ConfigsToParams){
    var categoriesBaseUrl = $Frontpress.restApiUrl + '/posts/';

    function getAllCategories(configs){
        var categoriesListUrl = categoriesBaseUrl;
        var params = ConfigsToParams.parse(configs);

        return AjaxModel.get(categoriesListUrl, params);
    }

    function getCategoriesByPostId(postId, configs){
        var postUrl = categoriesBaseUrl + '<post-id>?fields=categories';
        postUrl = postUrl.replace('<post-id>', postId);

        return AjaxModel.get(postUrl, configs);
    }

    return {
        getAllCategories: getAllCategories,
        getCategoriesByPostId: getCategoriesByPostId,
    };
}

CategoriesApi.$inject = ['AjaxModel', '$Frontpress', 'ConfigsToParams'];

module.factory('CategoriesApi', CategoriesApi);
