# Ember-text-spinners

[Documentation Site](https://les2.github.io/ember-text-spinners/)

This addon packages the text spinners from https://github.com/tawian/text-spinners as an Ember addon
for easy consumption in Ember applications.

## Installation

```
ember install ember-text-spinners
```

## Usage

Default spinner:
```
{{text-spinner}}
```

Specific a specific spinner:
```
{{text-spinner type='dots'}}
```

The `label` property is used set the `aria-label` attribute.

```
{{text-spinner label='Loading items'}}
```

The list of available spinners can be seen [on the documentation site](https://les2.github.io/ember-text-spinners/).

## Demo Site

The demo site can be run locally with:

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

