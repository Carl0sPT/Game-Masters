# from rest_framework import routers
from .api import *
from django.urls import path ,re_path,include
from games.views import *
# router=routers.DefaultRouter()
# router.register('api/games',GamesViewSet,'games')
# router.register('api/plataformas',PlataformasViewSet,'plataformas')
urlpatterns=[
    path("plataforma/upload/",UploadPlataforma.as_view(),name='plataforma-upload'),
    path("game/upload/",uploadNewGame,name='game-upload'),
    path("api/upload/",TestUploadImage.as_view(),name='Subir'),
    path("email-verify/",VerifyEmail.as_view(),name='email-verify'),
    path("plataformas/",PlataformasView.as_view(),name='plataformas'),
    path("generos/",GenerosView.as_view(),name='generos'),
    path("idiomas/",IdiomasView.as_view(),name='idiomas'),
    path("myGames/",getMyGames,name='mygames'),
    path('games/<int:id>/', UpdateGameView.as_view(), name='game-update'),
    # path('api/charge/', charge, name='api-charge'),
    path('api/recharge_wallet/',recharge_wallet,name="recharge-wallet"),
    path('api/userStripe/',crear_cliente_stripe,name="create-stripe"),
    path('api/createUserStripe/',create_stripe_account,name="create-stripe-account"),
    path('allgames/',getAllGames,name='all-games'),
    path('all-wallets/',getAllWallets,name='all-wallets'),
    path('update-wallets/',updateWallet,name='update-wallets'),
    path('ventas/<int:id_juego>/', getAllVentas, name='get_all_ventas'),
    path('juego/<int:id_juego>/', getGame, name='get-game'),
    path('wallet/<int:id_user>/', getWallet, name='get-wallet'),
    path('active-games/', getJuegosActivados, name='get-activeGames'),
    path('priceUpdate/', getUpdatePrice, name='get-UpdatePrices'),
    path('prices/<int:id_juego>/', getHistoryPrices, name='get-UpdatePrices'),
    path('pays/<int:id_user>/', getPaysUser, name='get-UpdatePaysUser'),
    path('getLogueados/<int:id_user>/', getLogueado, name='get-Logueados'),
    path('getIdLogueado/<int:id_user>/', getIdLogueado, name='get-Logueado'),
 path('getInfoLogueado/<int:id_user>/', getInfoLogueado, name='get-InfoLogueado'),
  path('getInfoGame/<int:id_juego>/', getInfoGame, name='get-InfoGame'),
  path('getNameVendedor/<int:id_user>/', getNameVendedor, name='get-Infovendedor'),
    path('getMyPays/<int:id_user>/', getMyPays, name='get-pays'),
    path('checkVisto/<int:id_user>/', checkVisto, name='checkVisto'),
    
    # path('webhook/', my_webhook_view),
]
# urlpatterns+=router.urls

