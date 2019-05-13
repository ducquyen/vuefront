export default {
  plugins: [],
  css: ['vuefront/scss/main.scss'],
  menu: [],
  pages: {
    '/contact': 'vuefront/lib/components/templates/common/contact',
    '/account': 'vuefront/lib/components/templates/common/account/account',
    '/account/login': 'vuefront/lib/components/templates/common/account/login',
    '/account/register': 'vuefront/lib/components/templates/common/account/register',
    '/account/wishlist': 'vuefront/lib/components/templates/store/wishlist',
    '/account/password': 'vuefront/lib/components/templates/common/account/password',
    '/account/edit': 'vuefront/lib/components/templates/common/account/edit',
    '/account/address': 'vuefront/lib/components/templates/common/account/address',
    '/store/compare': 'vuefront/lib/components/templates/store/compare',
    '/store/special': 'vuefront/lib/components/templates/store/special',
    '/blog/category/:id': 'vuefront/lib/components/templates/blog/category',
    '/blog/post/:id': 'vuefront/lib/components/templates/blog/post',
    '/search/:slug': 'vuefront/lib/components/templates/common/search',
    '/store/category/:id': 'vuefront/lib/components/templates/store/category',
    '/store/product/:id': 'vuefront/lib/components/templates/store/product',
    '/store/cart': 'vuefront/lib/components/templates/store/cart',
    '/page/:id': 'vuefront/lib/components/templates/common/page',
    '/': 'vuefront/lib/components/templates/common/home'
  },
  store: [
    {
      path: 'vuefront',
      module: 'vuefront/lib/store/vuefront'
    },
    {
      path: 'apollo',
      module: 'vuefront/lib/store/apollo'
    },
    {
      path: 'notification',
      module: 'vuefront/lib/store/notification'
    },
    {
      path: 'menu',
      module: 'vuefront/lib/store/menu'
    },
    {
      path: ['menu', 'blog'],
      module: 'vuefront/lib/store/menu/blog'
    },
    {
      path: ['menu', 'store'],
      module: 'vuefront/lib/store/menu/store'
    },
    {
      path: 'blog'
    },
    {
      path: ['blog', 'category'],
      module: 'vuefront/lib/store/blog/category'
    },
    {
      path: ['blog', 'post'],
      module: 'vuefront/lib/store/blog/post'
    },
    {
      path: ['common']
    },
    {
      path: ['common', 'page'],
      module: 'vuefront/lib/store/common/page'
    },
    {
      path: ['common', 'contact'],
      module: 'vuefront/lib/store/common/contact'
    },
    {
      path: ['common', 'customer'],
      module: 'vuefront/lib/store/common/customer'
    },
    {
      path: ['common', 'language'],
      module: 'vuefront/lib/store/common/language'
    },
    {
      path: ['store']
    },
    {
      path: ['store', 'cart'],
      module: 'vuefront/lib/store/store/cart'
    },
    {
      path: ['store', 'wishlist'],
      module: 'vuefront/lib/store/store/wishlist'
    },
    {
      path: ['store', 'currency'],
      module: 'vuefront/lib/store/store/currency'
    },
    {
      path: ['store', 'compare'],
      module: 'vuefront/lib/store/store/compare'
    },
    {
      path: ['store', 'category'],
      module: 'vuefront/lib/store/store/category'
    },
    {
      path: ['store', 'product'],
      module: 'vuefront/lib/store/store/product'
    }
  ],
  components: {
    AccountLogin: 'vuefront/lib/components/elements/common/account/login',
    AccountPassword: 'vuefront/lib/components/elements/common/account/password',
    AccountEdit: 'vuefront/lib/components/elements/common/account/edit',
    AccountRegister: 'vuefront/lib/components/elements/common/account/register',
    AccountNew: 'vuefront/lib/components/elements/common/account/new',
    AccountAddress: 'vuefront/lib/components/elements/common/account/address',
    Apollo: 'vuefront/lib/components/elements/common/apollo',
    Loader: 'vuefront/lib/components/elements/common/loader',
    Page: 'vuefront/lib/components/elements/common/page',
    Rating: 'vuefront/lib/components/elements/common/rating',
    Icon: 'vuefront/lib/components/elements/common/icon',
    ProductThumb: 'vuefront/lib/components/elements/store/productThumb',
    Product: 'vuefront/lib/components/elements/store/product',
    ProductImage: 'vuefront/lib/components/elements/store/productImage',
    PostThumb: 'vuefront/lib/components/elements/blog/postThumb',
    Menu: 'vuefront/lib/components/elements/common/header/topMenu',
    TopNav: 'vuefront/lib/components/elements/common/header/topNav',
    Nav: 'vuefront/lib/components/elements/common/header/nav',
    ProductsGrid: 'vuefront/lib/components/elements/store/productsGrid',
    Category: 'vuefront/lib/components/elements/store/category',
    CategoryBlog: 'vuefront/lib/components/elements/blog/category',
    PostsGrid: 'vuefront/lib/components/elements/blog/postsGrid',
    Notification: 'vuefront/lib/components/elements/common/notification/toast',
    // Notification: 'vuefront/lib/components/elements/common/notification/snackBar',
    Cart: 'vuefront/lib/components/elements/store/cart',
    Post: 'vuefront/lib/components/elements/blog/post',
    ProductOption: 'vuefront/lib/components/elements/store/productOption',
    ProductAttribute: 'vuefront/lib/components/elements/store/productAttribute',
    Reviews: 'vuefront/lib/components/elements/common/reviews',
    Pagination: 'vuefront/lib/components/elements/common/pagination',
    Sort: 'vuefront/lib/components/elements/store/productSort',
    NavSearch: 'vuefront/lib/components/elements/common/header/navSearch',
    Search: 'vuefront/lib/components/elements/common/search',
    Empty: 'vuefront/lib/components/elements/common/empty',
    Breadcrumbs: 'vuefront/lib/components/elements/common/breadcrumbs',
    Header: 'vuefront/lib/components/elements/common/header',
    Footer: 'vuefront/lib/components/elements/common/footer',
    Wishlist: 'vuefront/lib/components/elements/store/wishlist',
    Compare: 'vuefront/lib/components/elements/store/compare',
    Position: 'vuefront/lib/components/elements/common/position',
    Currency: 'vuefront/lib/components/elements/store/currency',
    Language: 'vuefront/lib/components/elements/common/language',
    ContactForm: 'vuefront/lib/components/elements/common/contact/form',
    Contact: 'vuefront/lib/components/elements/common/contact/contact',
    ContactLocation: 'vuefront/lib/components/elements/common/contact/location',
    ContactLocationGrid: 'vuefront/lib/components/elements/common/contact/locationGrid'
  },
  templates: {
    Header: 'vuefront/lib/components/templates/common/header',
    Footer: 'vuefront/lib/components/templates/common/footer',
    Menu: 'vuefront/lib/components/templates/common/menu',
    Layout: 'vuefront/lib/components/templates/common/layout',
    Error: 'vuefront/lib/components/templates/common/error'
  },
  modules: {
    SearchProduct: 'vuefront/lib/components/modules/store/searchProduct',
    SearchPost: 'vuefront/lib/components/modules/blog/searchPost',
    LatestProduct: 'vuefront/lib/components/modules/store/latestProduct',
    SpecialProduct: 'vuefront/lib/components/modules/store/specialProduct',
    LatestPost: 'vuefront/lib/components/modules/blog/latestPost',
    RelatedProduct: 'vuefront/lib/components/modules/store/relatedProduct',
    FeaturedProduct: 'vuefront/lib/components/modules/store/featuredProduct',
    Slideshow: 'vuefront/lib/components/modules/common/slideshow',
    Pages: 'vuefront/lib/components/modules/common/pages',
    StoreCategory: 'vuefront/lib/components/modules/store/category',
    BlogCategory: 'vuefront/lib/components/modules/blog/category',
    Account: 'vuefront/lib/components/modules/common/account',
    AccountLinks: 'vuefront/lib/components/modules/common/accountLinks',
    ExtraLinks: 'vuefront/lib/components/modules/common/extraLinks'
  }
}
