# `dataCloudflareTurnstileWidgets` Submodule <a name="`dataCloudflareTurnstileWidgets` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareTurnstileWidgets <a name="DataCloudflareTurnstileWidgets" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/turnstile_widgets cloudflare_turnstile_widgets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.Initializer"></a>

```typescript
import { dataCloudflareTurnstileWidgets } from '@cdktf/provider-cloudflare'

new dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets(scope: Construct, id: string, config: DataCloudflareTurnstileWidgetsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsConfig">DataCloudflareTurnstileWidgetsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsConfig">DataCloudflareTurnstileWidgetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.resetOrder">resetOrder</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.resetOrder"></a>

```typescript
public resetOrder(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareTurnstileWidgets resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.isConstruct"></a>

```typescript
import { dataCloudflareTurnstileWidgets } from '@cdktf/provider-cloudflare'

dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.isTerraformElement"></a>

```typescript
import { dataCloudflareTurnstileWidgets } from '@cdktf/provider-cloudflare'

dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.isTerraformDataSource"></a>

```typescript
import { dataCloudflareTurnstileWidgets } from '@cdktf/provider-cloudflare'

dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.generateConfigForImport"></a>

```typescript
import { dataCloudflareTurnstileWidgets } from '@cdktf/provider-cloudflare'

dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareTurnstileWidgets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareTurnstileWidgets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareTurnstileWidgets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/turnstile_widgets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareTurnstileWidgets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList">DataCloudflareTurnstileWidgetsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.order">order</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.result"></a>

```typescript
public readonly result: DataCloudflareTurnstileWidgetsResultList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList">DataCloudflareTurnstileWidgetsResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgets.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareTurnstileWidgetsConfig <a name="DataCloudflareTurnstileWidgetsConfig" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsConfig.Initializer"></a>

```typescript
import { dataCloudflareTurnstileWidgets } from '@cdktf/provider-cloudflare'

const dataCloudflareTurnstileWidgetsConfig: dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsConfig.property.direction">direction</a></code> | <code>string</code> | Direction to order widgets. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsConfig.property.order">order</a></code> | <code>string</code> | Field to order widgets by. Available values: "id", "sitekey", "name", "created_on", "modified_on". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/turnstile_widgets#account_id DataCloudflareTurnstileWidgets#account_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsConfig.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Direction to order widgets. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/turnstile_widgets#direction DataCloudflareTurnstileWidgets#direction}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/turnstile_widgets#max_items DataCloudflareTurnstileWidgets#max_items}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsConfig.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Field to order widgets by. Available values: "id", "sitekey", "name", "created_on", "modified_on".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/turnstile_widgets#order DataCloudflareTurnstileWidgets#order}

---

### DataCloudflareTurnstileWidgetsResult <a name="DataCloudflareTurnstileWidgetsResult" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResult.Initializer"></a>

```typescript
import { dataCloudflareTurnstileWidgets } from '@cdktf/provider-cloudflare'

const dataCloudflareTurnstileWidgetsResult: dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareTurnstileWidgetsResultList <a name="DataCloudflareTurnstileWidgetsResultList" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList.Initializer"></a>

```typescript
import { dataCloudflareTurnstileWidgets } from '@cdktf/provider-cloudflare'

new dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList.get"></a>

```typescript
public get(index: number): DataCloudflareTurnstileWidgetsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareTurnstileWidgetsResultOutputReference <a name="DataCloudflareTurnstileWidgetsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareTurnstileWidgets } from '@cdktf/provider-cloudflare'

new dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.botFightMode">botFightMode</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.clearanceLevel">clearanceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.ephemeralId">ephemeralId</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.offlabel">offlabel</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.sitekey">sitekey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResult">DataCloudflareTurnstileWidgetsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `botFightMode`<sup>Required</sup> <a name="botFightMode" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.botFightMode"></a>

```typescript
public readonly botFightMode: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `clearanceLevel`<sup>Required</sup> <a name="clearanceLevel" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.clearanceLevel"></a>

```typescript
public readonly clearanceLevel: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `ephemeralId`<sup>Required</sup> <a name="ephemeralId" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.ephemeralId"></a>

```typescript
public readonly ephemeralId: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `offlabel`<sup>Required</sup> <a name="offlabel" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.offlabel"></a>

```typescript
public readonly offlabel: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `sitekey`<sup>Required</sup> <a name="sitekey" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.sitekey"></a>

```typescript
public readonly sitekey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareTurnstileWidgetsResult;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTurnstileWidgets.DataCloudflareTurnstileWidgetsResult">DataCloudflareTurnstileWidgetsResult</a>

---



