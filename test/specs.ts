import { TopLevelFacetedUnitSpec } from 'vega-lite/build/src/spec';
export const vlSpecs: TopLevelFacetedUnitSpec[] = [
  {
    mark: 'bar',
    encoding: {
      x: { scale: { zero: true }, field: 'Horsepower', type: 'quantitative', aggregate: 'mean' },
      y: { field: 'Cylinders', type: 'nominal' },
    },
    data: { url: 'data/cars.json' },
    $schema: 'https://vega.github.io/schema/vega-lite/v2.json',
  },
  {
    mark: 'tick',
    encoding: { y: { scale: { zero: true }, field: 'Miles_per_Gallon', type: 'quantitative' } },
    data: { url: 'data/cars.json' },
    $schema: 'https://vega.github.io/schema/vega-lite/v2.json',
  },
  {
    mark: 'tick',
    encoding: { x: { scale: { zero: true }, field: 'Horsepower', type: 'quantitative' } },
    data: { url: 'data/cars.json' },
    $schema: 'https://vega.github.io/schema/vega-lite/v2.json',
  },
  {
    mark: 'tick',
    encoding: {
      y: { field: 'Cylinders', type: 'ordinal' },
      x: { scale: { zero: true }, field: 'Horsepower', type: 'quantitative' },
    },
    data: { url: 'data/cars.json' },
    $schema: 'https://vega.github.io/schema/vega-lite/v2.json',
  },
  {
    mark: 'tick',
    encoding: { x: { scale: { zero: true }, field: 'Miles_per_Gallon', type: 'quantitative' } },
    data: { url: 'data/cars.json' },
    $schema: 'https://vega.github.io/schema/vega-lite/v2.json',
  },
  {
    mark: 'point',
    encoding: {
      x: { scale: { zero: true }, field: 'Horsepower', type: 'quantitative' },
      y: { scale: { zero: true }, field: 'Acceleration', type: 'quantitative' },
    },
    data: { url: 'data/cars.json' },
    $schema: 'https://vega.github.io/schema/vega-lite/v2.json',
  },
  {
    mark: 'point',
    encoding: {
      x: { scale: { zero: true }, field: 'Acceleration', type: 'quantitative' },
      y: { scale: { zero: true }, field: 'Horsepower', type: 'quantitative' },
    },
    data: { url: 'data/cars.json' },
    $schema: 'https://vega.github.io/schema/vega-lite/v2.json',
  },
  {
    mark: 'bar',
    encoding: {
      y: { field: 'Origin', type: 'nominal' },
      x: { scale: { zero: true }, type: 'quantitative', aggregate: 'count' },
    },
    data: { url: 'data/cars.json' },
    $schema: 'https://vega.github.io/schema/vega-lite/v2.json',
  },
  {
    mark: 'bar',
    encoding: {
      x: { scale: { zero: true }, field: 'Horsepower', type: 'quantitative', aggregate: 'mean' },
      y: { field: 'Cylinders', type: 'ordinal' },
    },
    data: { url: 'data/cars.json' },
    $schema: 'https://vega.github.io/schema/vega-lite/v2.json',
  },
  {
    mark: 'point',
    encoding: {
      x: { scale: { zero: true }, field: 'Miles_per_Gallon', type: 'quantitative' },
      y: { scale: { zero: true }, field: 'Horsepower', type: 'quantitative' },
    },
    data: { url: 'data/cars.json' },
    $schema: 'https://vega.github.io/schema/vega-lite/v2.json',
  },
  {
    mark: 'bar',
    encoding: {
      x: { field: 'Origin', type: 'nominal' },
      y: { scale: { zero: true }, type: 'quantitative', aggregate: 'count' },
    },
    data: { url: 'data/cars.json' },
    $schema: 'https://vega.github.io/schema/vega-lite/v2.json',
  },
  {
    mark: 'tick',
    encoding: { x: { scale: { zero: true }, field: 'Horsepower', type: 'quantitative' } },
    data: { url: 'data/cars.json' },
    $schema: 'https://vega.github.io/schema/vega-lite/v2.json',
  },
  {
    mark: 'bar',
    encoding: {
      y: { field: 'Cylinders', type: 'ordinal' },
      x: { scale: { zero: true }, type: 'quantitative', aggregate: 'count' },
    },
    data: { url: 'data/cars.json' },
    $schema: 'https://vega.github.io/schema/vega-lite/v2.json',
  },
  {
    mark: 'bar',
    encoding: {
      y: { field: 'Origin', type: 'nominal' },
      x: { scale: { zero: true }, type: 'quantitative', aggregate: 'count' },
    },
    data: { url: 'data/cars.json' },
    $schema: 'https://vega.github.io/schema/vega-lite/v2.json',
  },
  {
    mark: 'point',
    encoding: {
      y: { field: 'Origin', type: 'nominal' },
      size: { scale: { zero: true }, field: 'Horsepower', type: 'quantitative', aggregate: 'mean' },
      x: { scale: { zero: true }, field: 'Acceleration', type: 'quantitative', bin: { maxbins: 10 } },
    },
    data: { url: 'data/cars.json' },
    $schema: 'https://vega.github.io/schema/vega-lite/v2.json',
  },
  {
    mark: 'point',
    encoding: {
      y: { field: 'Cylinders', type: 'ordinal' },
      size: { scale: { zero: true }, field: 'Horsepower', type: 'quantitative', aggregate: 'mean' },
      x: { scale: { zero: true }, field: 'Acceleration', type: 'quantitative', bin: { maxbins: 10 } },
    },
    data: { url: 'data/cars.json' },
    $schema: 'https://vega.github.io/schema/vega-lite/v2.json',
  },
  {
    mark: 'bar',
    encoding: {
      x: { scale: { zero: true }, field: 'Miles_per_Gallon', type: 'quantitative', bin: { maxbins: 5 } },
      y: { scale: { zero: true }, type: 'quantitative', aggregate: 'count' },
    },
    data: { url: 'data/cars.json' },
    $schema: 'https://vega.github.io/schema/vega-lite/v2.json',
  },
  {
    mark: 'tick',
    encoding: {
      y: { field: 'Origin', type: 'nominal' },
      x: { scale: { zero: true }, field: 'Horsepower', type: 'quantitative' },
    },
    data: { url: 'data/cars.json' },
    $schema: 'https://vega.github.io/schema/vega-lite/v2.json',
  },
  {
    mark: 'point',
    encoding: { x: { field: 'Release_Date', type: 'temporal' } },
    data: { url: 'data/movies.json' },
    $schema: 'https://vega.github.io/schema/vega-lite/v2.json',
  },
  {
    mark: 'bar',
    encoding: {
      x: { scale: { zero: true }, field: 'Horsepower', type: 'quantitative', aggregate: 'mean' },
      y: { field: 'Cylinders', type: 'ordinal' },
      row: { field: 'Origin', type: 'nominal' },
    },
    data: { url: 'data/cars.json' },
    $schema: 'https://vega.github.io/schema/vega-lite/v2.json',
  },
  {
    mark: 'point',
    encoding: {
      y: { scale: { zero: true }, field: 'IMDB_Rating', type: 'quantitative' },
      x: { field: 'Release_Date', type: 'temporal' },
    },
    data: { url: 'data/movies.json' },
    $schema: 'https://vega.github.io/schema/vega-lite/v2.json',
  },
  {
    mark: 'bar',
    encoding: {
      x: { scale: { zero: true }, field: 'Horsepower', type: 'quantitative', aggregate: 'mean' },
      y: { field: 'Cylinders', type: 'ordinal' },
    },
    data: { url: 'data/cars.json' },
    $schema: 'https://vega.github.io/schema/vega-lite/v2.json',
  },
  {
    mark: 'point',
    encoding: {
      x: { field: 'Cylinders', type: 'ordinal' },
      y: { field: 'Origin', type: 'nominal' },
      size: { scale: { zero: true }, field: 'Acceleration', type: 'quantitative', aggregate: 'mean' },
    },
    data: { url: 'data/cars.json' },
    $schema: 'https://vega.github.io/schema/vega-lite/v2.json',
  },
  {
    mark: 'point',
    encoding: {
      x: { field: 'Major_Genre', type: 'nominal' },
      y: { field: 'Creative_Type', type: 'nominal' },
      size: { scale: { zero: true }, type: 'quantitative', aggregate: 'count' },
    },
    data: { url: 'data/movies.json' },
    $schema: 'https://vega.github.io/schema/vega-lite/v2.json',
  },
  {
    mark: 'tick',
    encoding: {
      y: { field: 'Cylinders', type: 'ordinal' },
      x: { scale: { zero: true }, field: 'Horsepower', type: 'quantitative' },
    },
    data: { url: 'data/cars.json' },
    $schema: 'https://vega.github.io/schema/vega-lite/v2.json',
  },
];

export const aspSpecs = [
  [
    'data("data/cars.json")',
    'mark(bar)',
    'encoding(e0)',
    'channel(e0,x)',
    'field(e0,"Horsepower")',
    'type(e0,quantitative)',
    'aggregate(e0,mean)',
    'zero(e0)',
    'encoding(e1)',
    'channel(e1,y)',
    'field(e1,"Cylinders")',
    'type(e1,nominal)',
  ],
  [
    'data("data/cars.json")',
    'mark(tick)',
    'encoding(e0)',
    'channel(e0,y)',
    'field(e0,"Miles_per_Gallon")',
    'type(e0,quantitative)',
    'zero(e0)',
  ],
  [
    'data("data/cars.json")',
    'mark(tick)',
    'encoding(e0)',
    'channel(e0,x)',
    'field(e0,"Horsepower")',
    'type(e0,quantitative)',
    'zero(e0)',
  ],
  [
    'data("data/cars.json")',
    'mark(tick)',
    'encoding(e0)',
    'channel(e0,y)',
    'field(e0,"Cylinders")',
    'type(e0,ordinal)',
    'encoding(e1)',
    'channel(e1,x)',
    'field(e1,"Horsepower")',
    'type(e1,quantitative)',
    'zero(e1)',
  ],
  [
    'data("data/cars.json")',
    'mark(tick)',
    'encoding(e0)',
    'channel(e0,x)',
    'field(e0,"Miles_per_Gallon")',
    'type(e0,quantitative)',
    'zero(e0)',
  ],
  [
    'data("data/cars.json")',
    'mark(point)',
    'encoding(e0)',
    'channel(e0,x)',
    'field(e0,"Horsepower")',
    'type(e0,quantitative)',
    'zero(e0)',
    'encoding(e1)',
    'channel(e1,y)',
    'field(e1,"Acceleration")',
    'type(e1,quantitative)',
    'zero(e1)',
  ],
  [
    'data("data/cars.json")',
    'mark(point)',
    'encoding(e0)',
    'channel(e0,x)',
    'field(e0,"Acceleration")',
    'type(e0,quantitative)',
    'zero(e0)',
    'encoding(e1)',
    'channel(e1,y)',
    'field(e1,"Horsepower")',
    'type(e1,quantitative)',
    'zero(e1)',
  ],
  [
    'data("data/cars.json")',
    'mark(bar)',
    'encoding(e0)',
    'channel(e0,y)',
    'field(e0,"Origin")',
    'type(e0,nominal)',
    'encoding(e1)',
    'channel(e1,x)',
    'type(e1,quantitative)',
    'aggregate(e1,count)',
    'zero(e1)',
  ],
  [
    'data("data/cars.json")',
    'mark(bar)',
    'encoding(e0)',
    'channel(e0,x)',
    'field(e0,"Horsepower")',
    'type(e0,quantitative)',
    'aggregate(e0,mean)',
    'zero(e0)',
    'encoding(e1)',
    'channel(e1,y)',
    'field(e1,"Cylinders")',
    'type(e1,ordinal)',
  ],
  [
    'data("data/cars.json")',
    'mark(point)',
    'encoding(e0)',
    'channel(e0,x)',
    'field(e0,"Miles_per_Gallon")',
    'type(e0,quantitative)',
    'zero(e0)',
    'encoding(e1)',
    'channel(e1,y)',
    'field(e1,"Horsepower")',
    'type(e1,quantitative)',
    'zero(e1)',
  ],
  [
    'data("data/cars.json")',
    'mark(bar)',
    'encoding(e0)',
    'channel(e0,x)',
    'field(e0,"Origin")',
    'type(e0,nominal)',
    'encoding(e1)',
    'channel(e1,y)',
    'type(e1,quantitative)',
    'aggregate(e1,count)',
    'zero(e1)',
  ],
  [
    'data("data/cars.json")',
    'mark(tick)',
    'encoding(e0)',
    'channel(e0,x)',
    'field(e0,"Horsepower")',
    'type(e0,quantitative)',
    'zero(e0)',
  ],
  [
    'data("data/cars.json")',
    'mark(bar)',
    'encoding(e0)',
    'channel(e0,y)',
    'field(e0,"Cylinders")',
    'type(e0,ordinal)',
    'encoding(e1)',
    'channel(e1,x)',
    'type(e1,quantitative)',
    'aggregate(e1,count)',
    'zero(e1)',
  ],
  [
    'data("data/cars.json")',
    'mark(bar)',
    'encoding(e0)',
    'channel(e0,y)',
    'field(e0,"Origin")',
    'type(e0,nominal)',
    'encoding(e1)',
    'channel(e1,x)',
    'type(e1,quantitative)',
    'aggregate(e1,count)',
    'zero(e1)',
  ],
  [
    'data("data/cars.json")',
    'mark(point)',
    'encoding(e0)',
    'channel(e0,y)',
    'field(e0,"Origin")',
    'type(e0,nominal)',
    'encoding(e1)',
    'channel(e1,size)',
    'field(e1,"Horsepower")',
    'type(e1,quantitative)',
    'aggregate(e1,mean)',
    'zero(e1)',
    'encoding(e2)',
    'channel(e2,x)',
    'field(e2,"Acceleration")',
    'type(e2,quantitative)',
    'bin(e2,10)',
    'zero(e2)',
  ],
  [
    'data("data/cars.json")',
    'mark(point)',
    'encoding(e0)',
    'channel(e0,y)',
    'field(e0,"Cylinders")',
    'type(e0,ordinal)',
    'encoding(e1)',
    'channel(e1,size)',
    'field(e1,"Horsepower")',
    'type(e1,quantitative)',
    'aggregate(e1,mean)',
    'zero(e1)',
    'encoding(e2)',
    'channel(e2,x)',
    'field(e2,"Acceleration")',
    'type(e2,quantitative)',
    'bin(e2,10)',
    'zero(e2)',
  ],
  [
    'data("data/cars.json")',
    'mark(bar)',
    'encoding(e0)',
    'channel(e0,x)',
    'field(e0,"Miles_per_Gallon")',
    'type(e0,quantitative)',
    'bin(e0,5)',
    'zero(e0)',
    'encoding(e1)',
    'channel(e1,y)',
    'type(e1,quantitative)',
    'aggregate(e1,count)',
    'zero(e1)',
  ],
  [
    'data("data/cars.json")',
    'mark(tick)',
    'encoding(e0)',
    'channel(e0,y)',
    'field(e0,"Origin")',
    'type(e0,nominal)',
    'encoding(e1)',
    'channel(e1,x)',
    'field(e1,"Horsepower")',
    'type(e1,quantitative)',
    'zero(e1)',
  ],
  [
    'data("data/movies.json")',
    'mark(point)',
    'encoding(e0)',
    'channel(e0,x)',
    'field(e0,"Release_Date")',
    'type(e0,temporal)',
  ],
  [
    'data("data/cars.json")',
    'mark(bar)',
    'encoding(e0)',
    'channel(e0,x)',
    'field(e0,"Horsepower")',
    'type(e0,quantitative)',
    'aggregate(e0,mean)',
    'zero(e0)',
    'encoding(e1)',
    'channel(e1,y)',
    'field(e1,"Cylinders")',
    'type(e1,ordinal)',
    'encoding(e2)',
    'channel(e2,row)',
    'field(e2,"Origin")',
    'type(e2,nominal)',
  ],
  [
    'data("data/movies.json")',
    'mark(point)',
    'encoding(e0)',
    'channel(e0,y)',
    'field(e0,"IMDB_Rating")',
    'type(e0,quantitative)',
    'zero(e0)',
    'encoding(e1)',
    'channel(e1,x)',
    'field(e1,"Release_Date")',
    'type(e1,temporal)',
  ],
  [
    'data("data/cars.json")',
    'mark(bar)',
    'encoding(e0)',
    'channel(e0,x)',
    'field(e0,"Horsepower")',
    'type(e0,quantitative)',
    'aggregate(e0,mean)',
    'zero(e0)',
    'encoding(e1)',
    'channel(e1,y)',
    'field(e1,"Cylinders")',
    'type(e1,ordinal)',
  ],
  [
    'data("data/cars.json")',
    'mark(point)',
    'encoding(e0)',
    'channel(e0,x)',
    'field(e0,"Cylinders")',
    'type(e0,ordinal)',
    'encoding(e1)',
    'channel(e1,y)',
    'field(e1,"Origin")',
    'type(e1,nominal)',
    'encoding(e2)',
    'channel(e2,size)',
    'field(e2,"Acceleration")',
    'type(e2,quantitative)',
    'aggregate(e2,mean)',
    'zero(e2)',
  ],
  [
    'data("data/movies.json")',
    'mark(point)',
    'encoding(e0)',
    'channel(e0,x)',
    'field(e0,"Major_Genre")',
    'type(e0,nominal)',
    'encoding(e1)',
    'channel(e1,y)',
    'field(e1,"Creative_Type")',
    'type(e1,nominal)',
    'encoding(e2)',
    'channel(e2,size)',
    'type(e2,quantitative)',
    'aggregate(e2,count)',
    'zero(e2)',
  ],
  [
    'data("data/cars.json")',
    'mark(tick)',
    'encoding(e0)',
    'channel(e0,y)',
    'field(e0,"Cylinders")',
    'type(e0,ordinal)',
    'encoding(e1)',
    'channel(e1,x)',
    'field(e1,"Horsepower")',
    'type(e1,quantitative)',
    'zero(e1)',
  ],
];
