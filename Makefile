post-link:
	curl --request POST \
  --url http://localhost:3000/link \
  --header 'Content-Type: application/json' \
  --data '{ \
	"originalLink": "https://restrictedii.net" \
	}'
get-link:
	curl --request GET \
		--url http://localhost:3000/ebjs429?isAdult=true
