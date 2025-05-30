---
title: React Heatmap chart
productId: x-charts
components: Heatmap, HeatmapPlot, HeatmapTooltip
---

# Charts - Heatmap [<span class="plan-pro"></span>](/x/introduction/licensing/#pro-plan 'Pro plan')

<p class="description">Heatmap charts visually represents data with color variations to highlight patterns and trends across two dimensions.</p>

## Basics

Heatmap charts series must contain a `data` property containing an array of 3-tuples.
The first two numbers in each tuple correspond to the x and y indexes of the cell, respectively.
The third number is the value for the given cell.

```jsx
series={[{
    data: [
        [0, 2, 2.7], // Cell (0, 2) receives the value 2.7
        [1, 2, 4.5], // Cell (1, 2) receives the value 4.5
    ]
}]}
```

You can specify x and y ticks with the `xAxis` and `yAxis` props.

{{"demo": "BasicHeatmap.js"}}

## Customization

### Color mapping

To customize the color mapping, use the `zAxis` configuration.
You can either use the piecewise or continuous [color mapping](https://mui.com/x/react-charts/styling/#values-color).

{{"demo": "ColorConfig.js"}}

### Highlight

You can chose to highlight the hovered element by setting `highlightScope.highlight` to `'item'`.
To fade the other item, set `highlightScope.fade` to `'global'`.

{{"demo": "HighlightHeatmap.js"}}

By default highlighted/faded effect is obtained by applying the CSS property `filter: saturate(...)` to cells.
To modify this styling, use the `heatmapClasses.highlighted` and `heatmapClasses.faded` CSS classes to override the applied style.

In the following demo, we replace the highlight saturation by a border radius and reduce the saturation of the faded cells.

{{"demo": "HighlightClasses.js"}}

### Axes

The Heatmap axes can be customized like any other chart axis.
The available options are available in the [dedicated page](/x/react-charts/axis/#axis-customization).

### Tooltip 🚧

## Legend 🚧

## Labels 🚧

## Custom item

{{"demo": "CustomItem.js"}}
