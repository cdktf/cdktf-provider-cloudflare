# `dataCloudflareDnsSettingsInternalView` Submodule <a name="`dataCloudflareDnsSettingsInternalView` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareDnsSettingsInternalView <a name="DataCloudflareDnsSettingsInternalView" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view cloudflare_dns_settings_internal_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer"></a>

```typescript
import { dataCloudflareDnsSettingsInternalView } from '@cdktf/provider-cloudflare'

new dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView(scope: Construct, id: string, config: DataCloudflareDnsSettingsInternalViewConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig">DataCloudflareDnsSettingsInternalViewConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig">DataCloudflareDnsSettingsInternalViewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.resetViewId">resetViewId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareDnsSettingsInternalViewFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter">DataCloudflareDnsSettingsInternalViewFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetViewId` <a name="resetViewId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.resetViewId"></a>

```typescript
public resetViewId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareDnsSettingsInternalView resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.isConstruct"></a>

```typescript
import { dataCloudflareDnsSettingsInternalView } from '@cdktf/provider-cloudflare'

dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.isTerraformElement"></a>

```typescript
import { dataCloudflareDnsSettingsInternalView } from '@cdktf/provider-cloudflare'

dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.isTerraformDataSource"></a>

```typescript
import { dataCloudflareDnsSettingsInternalView } from '@cdktf/provider-cloudflare'

dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.generateConfigForImport"></a>

```typescript
import { dataCloudflareDnsSettingsInternalView } from '@cdktf/provider-cloudflare'

dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareDnsSettingsInternalView resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareDnsSettingsInternalView to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareDnsSettingsInternalView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareDnsSettingsInternalView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference">DataCloudflareDnsSettingsInternalViewFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.modifiedTime">modifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter">DataCloudflareDnsSettingsInternalViewFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.viewIdInput">viewIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.viewId">viewId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.filter"></a>

```typescript
public readonly filter: DataCloudflareDnsSettingsInternalViewFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference">DataCloudflareDnsSettingsInternalViewFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedTime`<sup>Required</sup> <a name="modifiedTime" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.modifiedTime"></a>

```typescript
public readonly modifiedTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareDnsSettingsInternalViewFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter">DataCloudflareDnsSettingsInternalViewFilter</a>

---

##### `viewIdInput`<sup>Optional</sup> <a name="viewIdInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.viewIdInput"></a>

```typescript
public readonly viewIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `viewId`<sup>Required</sup> <a name="viewId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.viewId"></a>

```typescript
public readonly viewId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalView.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareDnsSettingsInternalViewConfig <a name="DataCloudflareDnsSettingsInternalViewConfig" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.Initializer"></a>

```typescript
import { dataCloudflareDnsSettingsInternalView } from '@cdktf/provider-cloudflare'

const dataCloudflareDnsSettingsInternalViewConfig: dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter">DataCloudflareDnsSettingsInternalViewFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#filter DataCloudflareDnsSettingsInternalView#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.viewId">viewId</a></code> | <code>string</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#account_id DataCloudflareDnsSettingsInternalView#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareDnsSettingsInternalViewFilter;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter">DataCloudflareDnsSettingsInternalViewFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#filter DataCloudflareDnsSettingsInternalView#filter}.

---

##### `viewId`<sup>Optional</sup> <a name="viewId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewConfig.property.viewId"></a>

```typescript
public readonly viewId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#view_id DataCloudflareDnsSettingsInternalView#view_id}

---

### DataCloudflareDnsSettingsInternalViewFilter <a name="DataCloudflareDnsSettingsInternalViewFilter" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter.Initializer"></a>

```typescript
import { dataCloudflareDnsSettingsInternalView } from '@cdktf/provider-cloudflare'

const dataCloudflareDnsSettingsInternalViewFilter: dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter.property.direction">direction</a></code> | <code>string</code> | Direction to order DNS views in. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter.property.match">match</a></code> | <code>string</code> | Whether to match all search requirements or at least one (any). |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter.property.name">name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName">DataCloudflareDnsSettingsInternalViewFilterName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#name DataCloudflareDnsSettingsInternalView#name}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter.property.order">order</a></code> | <code>string</code> | Field to order DNS views by. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter.property.zoneId">zoneId</a></code> | <code>string</code> | A zone ID that exists in the zones list for the view. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter.property.zoneName">zoneName</a></code> | <code>string</code> | A zone name that exists in the zones list for the view. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Direction to order DNS views in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#direction DataCloudflareDnsSettingsInternalView#direction}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

Whether to match all search requirements or at least one (any).

If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#match DataCloudflareDnsSettingsInternalView#match}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter.property.name"></a>

```typescript
public readonly name: DataCloudflareDnsSettingsInternalViewFilterName;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName">DataCloudflareDnsSettingsInternalViewFilterName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#name DataCloudflareDnsSettingsInternalView#name}.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Field to order DNS views by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#order DataCloudflareDnsSettingsInternalView#order}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

A zone ID that exists in the zones list for the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#zone_id DataCloudflareDnsSettingsInternalView#zone_id}

---

##### `zoneName`<sup>Optional</sup> <a name="zoneName" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

A zone name that exists in the zones list for the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#zone_name DataCloudflareDnsSettingsInternalView#zone_name}

---

### DataCloudflareDnsSettingsInternalViewFilterName <a name="DataCloudflareDnsSettingsInternalViewFilterName" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName.Initializer"></a>

```typescript
import { dataCloudflareDnsSettingsInternalView } from '@cdktf/provider-cloudflare'

const dataCloudflareDnsSettingsInternalViewFilterName: dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName.property.contains">contains</a></code> | <code>string</code> | Substring of the DNS view name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName.property.endswith">endswith</a></code> | <code>string</code> | Suffix of the DNS view name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName.property.exact">exact</a></code> | <code>string</code> | Exact value of the DNS view name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName.property.startswith">startswith</a></code> | <code>string</code> | Prefix of the DNS view name. |

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName.property.contains"></a>

```typescript
public readonly contains: string;
```

- *Type:* string

Substring of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#contains DataCloudflareDnsSettingsInternalView#contains}

---

##### `endswith`<sup>Optional</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName.property.endswith"></a>

```typescript
public readonly endswith: string;
```

- *Type:* string

Suffix of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#endswith DataCloudflareDnsSettingsInternalView#endswith}

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

Exact value of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#exact DataCloudflareDnsSettingsInternalView#exact}

---

##### `startswith`<sup>Optional</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName.property.startswith"></a>

```typescript
public readonly startswith: string;
```

- *Type:* string

Prefix of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#startswith DataCloudflareDnsSettingsInternalView#startswith}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareDnsSettingsInternalViewFilterNameOutputReference <a name="DataCloudflareDnsSettingsInternalViewFilterNameOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.Initializer"></a>

```typescript
import { dataCloudflareDnsSettingsInternalView } from '@cdktf/provider-cloudflare'

new dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.resetContains">resetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.resetEndswith">resetEndswith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.resetStartswith">resetStartswith</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContains` <a name="resetContains" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.resetContains"></a>

```typescript
public resetContains(): void
```

##### `resetEndswith` <a name="resetEndswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.resetEndswith"></a>

```typescript
public resetEndswith(): void
```

##### `resetExact` <a name="resetExact" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.resetExact"></a>

```typescript
public resetExact(): void
```

##### `resetStartswith` <a name="resetStartswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.resetStartswith"></a>

```typescript
public resetStartswith(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.containsInput">containsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.endswithInput">endswithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.exactInput">exactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.startswithInput">startswithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.contains">contains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.endswith">endswith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.exact">exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.startswith">startswith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName">DataCloudflareDnsSettingsInternalViewFilterName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containsInput`<sup>Optional</sup> <a name="containsInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.containsInput"></a>

```typescript
public readonly containsInput: string;
```

- *Type:* string

---

##### `endswithInput`<sup>Optional</sup> <a name="endswithInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.endswithInput"></a>

```typescript
public readonly endswithInput: string;
```

- *Type:* string

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.exactInput"></a>

```typescript
public readonly exactInput: string;
```

- *Type:* string

---

##### `startswithInput`<sup>Optional</sup> <a name="startswithInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.startswithInput"></a>

```typescript
public readonly startswithInput: string;
```

- *Type:* string

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.contains"></a>

```typescript
public readonly contains: string;
```

- *Type:* string

---

##### `endswith`<sup>Required</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.endswith"></a>

```typescript
public readonly endswith: string;
```

- *Type:* string

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

---

##### `startswith`<sup>Required</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.startswith"></a>

```typescript
public readonly startswith: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareDnsSettingsInternalViewFilterName;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName">DataCloudflareDnsSettingsInternalViewFilterName</a>

---


### DataCloudflareDnsSettingsInternalViewFilterOutputReference <a name="DataCloudflareDnsSettingsInternalViewFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareDnsSettingsInternalView } from '@cdktf/provider-cloudflare'

new dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.putName">putName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resetMatch">resetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resetZoneId">resetZoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resetZoneName">resetZoneName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putName` <a name="putName" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.putName"></a>

```typescript
public putName(value: DataCloudflareDnsSettingsInternalViewFilterName): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.putName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName">DataCloudflareDnsSettingsInternalViewFilterName</a>

---

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetMatch` <a name="resetMatch" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resetMatch"></a>

```typescript
public resetMatch(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resetZoneId"></a>

```typescript
public resetZoneId(): void
```

##### `resetZoneName` <a name="resetZoneName" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.resetZoneName"></a>

```typescript
public resetZoneName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.name">name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference">DataCloudflareDnsSettingsInternalViewFilterNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.matchInput">matchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.nameInput">nameInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName">DataCloudflareDnsSettingsInternalViewFilterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.zoneNameInput">zoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.match">match</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.zoneName">zoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter">DataCloudflareDnsSettingsInternalViewFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.name"></a>

```typescript
public readonly name: DataCloudflareDnsSettingsInternalViewFilterNameOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterNameOutputReference">DataCloudflareDnsSettingsInternalViewFilterNameOutputReference</a>

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.matchInput"></a>

```typescript
public readonly matchInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: IResolvable | DataCloudflareDnsSettingsInternalViewFilterName;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterName">DataCloudflareDnsSettingsInternalViewFilterName</a>

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `zoneNameInput`<sup>Optional</sup> <a name="zoneNameInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.zoneNameInput"></a>

```typescript
public readonly zoneNameInput: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareDnsSettingsInternalViewFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsSettingsInternalView.DataCloudflareDnsSettingsInternalViewFilter">DataCloudflareDnsSettingsInternalViewFilter</a>

---



