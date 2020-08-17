# echart-test

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## File Description

### icon

- icon文件夹下面放的地图图标mapIcon用于点击显示
- mapIcon里有三个不同的显示对话框用于数据可视化显示，根据采集器类型选择显示对应的对话框，对话框里面放置了不同的charts组件

### charts

- 三种不同的图表类型，折线图、玫瑰图、柱形图，根据mapIcon传入的数据、颜色等等进行配置
