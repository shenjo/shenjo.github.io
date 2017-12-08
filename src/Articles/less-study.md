### Base less syntax (functions)

@变量名: {value}

```less
 @myLink-color : #428bca;
 @mylink-hover : darken(@myLink-color,10%)
```

selectors

```less
// Variables
@my-selector: banner;

// Usage
.@{my-selector} {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}
//output
.banner {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}
```

urls
```less
// Variables
@images: "../img";

// Usage
body {
  color: #444;
  background: url("@{images}/white-sand.png");
}
```

import

> Syntax: @import "@{themes}/tidal-wave.less";

```less
// Variables
@themes: "../../src/themes";

// Usage
@import "@{themes}/tidal-wave.less";
```

properties

```less
@property: color;

.widget {
  @{property}: #0ee;
  background-@{property}: #999;
}
```

Parent Selectors

> Referencing parent selectors with &

```less
a {
  color: blue;
  &:hover {
    color: green;
  }
}

// same
a {
  color: blue;
}

a:hover {
  color: green;
}
```

Extend



##### less build-in functions


1. darken(color,amount,[method])

> Decrease the lightness of a color in the HSL color space by an absolute amount.

```less
darken(hsl(90, 80%, 50%), 20%)

//output : #4d8a0f
```

    

