const {
  override,
  fixBabelImports,
  addLessLoader,
} = require("customize-cra");


module.exports = override( 
  fixBabelImports("babel-plugin-import", {
    libraryName: "antd-mobile",
    style: true
  }),
  addLessLoader({
    ident: 'postcss',
    javascriptEnabled: true,
    modifyVars: { "@brand-primary": "#1cae82",
                  "@brand-primary-tap": "#1DA57A",
  }
  })
);
