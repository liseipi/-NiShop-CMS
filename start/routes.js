'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.on('/test').render('test')

Route.on('/login').render('auth.login')
Route.post('/login', 'AuthController.signIn')
Route.get('/logout', async ({auth, response, session})=>{
  await auth.logout()
  session.clear()
  return response.redirect('/')
})

Route.group(()=>{

  Route.get('/', 'HomeController.store')
  Route.get('/dashboard', 'HomeController.dashboard')

  Route.get('/menu/add', 'MenuController.add')
  Route.post('/menu/add', 'MenuController.addSave').validator('menu')
  Route.get('/menu/list', 'MenuController.list')
  Route.get('/menu/edit/:id', 'MenuController.edit')
  Route.post('/menu/edit/:id', 'MenuController.editSave').validator('menu')
  Route.get('/menu/destroy/:id', 'MenuController.destroy')

  Route.get('/manager/roleAdd', 'ManagerController.roleAdd')
  Route.post('/manager/roleAdd', 'ManagerController.roleAddSave').validator('role')
  Route.get('/manager/role', 'ManagerController.role')
  Route.get('/manager/roleEdit/:id', 'ManagerController.roleEdit')
  Route.post('/manager/roleEdit/:id', 'ManagerController.roleEditSave').validator('role')
  Route.get('/manager/roleDestroy/:id', 'ManagerController.roleDestroy')
  Route.get('/manager/add', 'ManagerController.add')
  Route.post('/manager/add', 'ManagerController.addSave').validator('manager')
  Route.get('/manager/list', 'ManagerController.list')
  Route.get('/manager/edit/:id', 'ManagerController.edit')
  Route.post('/manager/edit/:id', 'ManagerController.editSave').validator('managerEdit')
  Route.get('/manager/destroy/:id', 'ManagerController.destroy')

  Route.get('/article/category', 'ArticleController.category')
  Route.get('/article/categoryAdd', 'ArticleController.categoryAdd')
  Route.post('/article/categoryAdd', 'ArticleController.categorySave').validator('articleCategory')
  Route.get('/article/categoryEdit/:id', 'ArticleController.categoryEdit')
  Route.post('/article/categoryEdit/:id', 'ArticleController.categoryEditSave').validator('articleCategory')
  Route.get('/article/categoryDestroy/:id', 'ArticleController.categoryDestroy')
  Route.get('/article/add', 'ArticleController.add')
  Route.post('/article/add', 'ArticleController.addSave').validator('article')
  Route.get('/article/list', 'ArticleController.list')
  Route.get('/article/edit/:id', 'ArticleController.edit')
  Route.post('/article/edit/:id', 'ArticleController.editSave').validator('article')
  Route.get('/article/destroy/:id', 'ArticleController.destroy')

  /*--goods--*/
  Route.get('/goods/category', 'GoodsController.category')
  Route.get('/goods/categoryAdd', 'GoodsController.categoryAdd')
  Route.post('/goods/categoryAdd', 'GoodsController.categorySave').validator('goodsCategory')
  Route.get('/goods/categoryEdit/:id', 'GoodsController.categoryEdit')
  Route.post('/goods/categoryEdit/:id', 'GoodsController.categoryEditSave').validator('goodsCategory')
  Route.get('/goods/categoryDestroy/:id', 'GoodsController.categoryDestroy')

  Route.get('/goods/categoryAttrAdd', 'GoodsController.categoryAttrAdd')
  Route.post('/goods/categoryAttrAdd', 'GoodsController.categoryAttrAddSave')
  Route.get('/goods/categoryAttr', 'GoodsController.categoryAttr')
  Route.get('/goods/categoryAttrEdit/:id', 'GoodsController.categoryAttrEdit')
  Route.post('/goods/categoryAttrEdit/:id', 'GoodsController.categoryAttrEditSave')
  Route.get('/goods/categoryAttrDestroy/:id', 'GoodsController.categoryAttrDestroy')

  Route.get('/goods/brands', 'GoodsController.brands')
  Route.get('/goods/brandsAdd', 'GoodsController.brandsAdd')
  Route.post('/goods/brandsAdd', 'GoodsController.brandsSave').validator('brands')
  Route.get('/goods/brandsEdit/:id', 'GoodsController.brandsEdit')
  Route.post('/goods/brandsEdit/:id', 'GoodsController.brandsEditSave').validator('brands')
  Route.get('/goods/brandsDestroy/:id', 'GoodsController.brandsDestroy')

  Route.get('/goods/attr', 'GoodsController.attr')
  Route.get('/goods/attrAdd', 'GoodsController.attrAdd')
  Route.post('/goods/attrAdd', 'GoodsController.attrSave').validator('attr')
  Route.get('/goods/attrEdit/:id', 'GoodsController.attrEdit')
  Route.post('/goods/attrEdit/:id', 'GoodsController.attrEditSave').validator('attr')
  Route.get('/goods/attrDestroy/:id', 'GoodsController.attrDestroy')
  Route.get('/goods/getAttr', 'GoodsController.getAttr')

  Route.get('/goods/add', 'GoodsController.add')
  Route.post('/goods/add', 'GoodsController.addSave').validator('goods')
  Route.get('/goods/list', 'GoodsController.list')
  Route.get('/goods/edit/:id', 'GoodsController.edit')
  Route.post('/goods/edit/:id', 'GoodsController.editSave').validator('goodsEdit')
  Route.get('/goods/destroy/:id', 'GoodsController.destroy')
  Route.get('/goods/checkSku', 'GoodsController.checkSku')
  Route.get('/goods/delAttr', 'GoodsController.delAttr')
  Route.get('/goods/delGroup', 'GoodsController.delGroup')
  Route.get('/goods/delGallery', 'GoodsController.delGallery')

  Route.get('/goods/relatedNew', 'GoodsController.relatedNew')
  Route.post('/goods/relatedNew', 'GoodsController.relatedNewSave')
  Route.get('/goods/related', 'GoodsController.related')
  Route.get('/goods/relatedEdit/:id', 'GoodsController.relatedEdit')
  Route.post('/goods/relatedEdit/:id', 'GoodsController.relatedEditSave')
  Route.get('/goods/relatedDestroy/:id', 'GoodsController.relatedDestroy')
  /*--end goods--*/

  Route.get('/advert/list', 'AdvertController.list')
  Route.get('/advert/add', 'AdvertController.add')
  Route.post('/advert/add', 'AdvertController.addSave').validator('advert')
  Route.get('/advert/edit/:id', 'AdvertController.edit')
  Route.post('/advert/edit/:id', 'AdvertController.editSave').validator('advert')
  Route.get('/advert/destroy/:id', 'AdvertController.destroy')
  Route.get('/advert/delAdvertPhoto', 'AdvertController.delAdvertPhoto')
  Route.get('/advert/saleAdd', 'AdvertController.saleAdd')
  Route.post('/advert/saleAdd', 'AdvertController.saleAddSave').validator('sale')
  Route.get('/advert/saleList', 'AdvertController.saleList')
  Route.get('/advert/saleEdit/:id', 'AdvertController.saleEdit')
  Route.post('/advert/saleEdit/:id', 'AdvertController.saleEditSave').validator('sale')
  Route.get('/advert/saleDestroy/:id', 'AdvertController.saleDestroy')
  Route.get('/advert/redPacket', 'AdvertController.redPacket')
  Route.get('/advert/redPacketAdd', 'AdvertController.redPacketAdd')
  Route.post('/advert/redPacketAdd', 'AdvertController.redPacketAddSave').validator('redpacket')
  Route.get('/advert/redPacketEdit/:id', 'AdvertController.redPacketEdit')
  Route.post('/advert/redPacketEdit/:id', 'AdvertController.redPacketEditSave').validator('redpacket')
  Route.get('/advert/redPacketDestroy/:id', 'AdvertController.redPacketDestroy')
  Route.get('/advert/redPacketLibrary/:id', 'AdvertController.redPacketLibrary')
  Route.post('/advert/redPacketLibrary/:id', 'AdvertController.redPacketLibrarySave')

  Route.get('/system/shopInfo', 'SystemController.shopInfo')
  Route.post('/system/shopInfo', 'SystemController.shopInfoSave')

  Route.get('/member/list', 'MemberController.list')
  Route.get('/member/add', 'MemberController.add')
  Route.post('/member/add', 'MemberController.addSave').validator('member')
  Route.get('/member/edit/:id', 'MemberController.edit')
  Route.post('/member/edit/:id', 'MemberController.editSave')
  Route.get('/member/destroy/:id', 'MemberController.destroy')
  Route.get('/member/addressNew/:id', 'MemberController.addressNew')
  Route.post('/member/addressNew/:id', 'MemberController.addressNewSave').validator('address')
  Route.get('/member/addressEdit/:id', 'MemberController.addressEdit')
  Route.post('/member/addressEdit/:id', 'MemberController.addressEditSave').validator('address')
  Route.get('/member/addressDestroy/:id', 'MemberController.addressDestroy')
  Route.get('/member/getRegion', 'MemberController.getRegion')
  Route.get('/member/cart/:id', 'MemberController.cart')
  Route.post('/member/cartSave/:id', 'MemberController.cartSave')
  Route.get('/member/level', 'MemberController.level')
  Route.get('/member/levelAdd', 'MemberController.levelAdd')
  Route.post('/member/levelAdd', 'MemberController.levelAddSave').validator('memberLevel')
  Route.get('/member/levelEdit/:id', 'MemberController.levelEdit')
  Route.post('/member/levelEdit/:id', 'MemberController.levelEditSave').validator('memberLevel')
  Route.get('/member/levelDestroy/:id', 'MemberController.levelDestroy')

  Route.get('/order/add/:id', 'OrderController.add')
  Route.post('/order/add/:id', 'OrderController.addSave')
  Route.get('/order/list', 'OrderController.list')

  Route.get('/file/pictures/(.*/?)', 'FileController.pictures')

  Route.get('/getBrands', 'GetFindController.getBrands')
  Route.get('/getCategory', 'GetFindController.getCategory')
  Route.get('/getGoods', 'GetFindController.getGoods')
  Route.get('/getMember', 'GetFindController.getMember')


}).middleware(['auth', 'role'])
