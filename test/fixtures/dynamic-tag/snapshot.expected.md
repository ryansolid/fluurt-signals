# Render {"tag":"span"}
```html
<span a="1">
  BODY
</span>
```

# Mutations
```
inserted #text0
inserted #text2
inserted span1
```


# Render {}
```html
Hello
```

# Mutations
```
removed span after #text0
inserted #text1
```


# Render {"tag":"span"}
```html
<span a="1">
  BODY
</span>
```

# Mutations
```
removed #text after #text0
inserted span1
```


# Render {"tag":"a"}
```html
<a a="1">
  BODY
</a>
```

# Mutations
```
removed span after #text0
inserted a1
```


# Render {}
```html
<div a="1">
  BODY
</div>
```

# Mutations
```
removed a after #text0
inserted div1
```