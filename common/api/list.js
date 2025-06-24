import $http from "../http"

export const get_label = (data) => {
	return $http({
		url:'get_label',
		data
	})
}