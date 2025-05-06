# `dataCloudflareCustomHostnames` Submodule <a name="`dataCloudflareCustomHostnames` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareCustomHostnames <a name="DataCloudflareCustomHostnames" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/custom_hostnames cloudflare_custom_hostnames}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer"></a>

```typescript
import { dataCloudflareCustomHostnames } from '@cdktf/provider-cloudflare'

new dataCloudflareCustomHostnames.DataCloudflareCustomHostnames(scope: Construct, id: string, config: DataCloudflareCustomHostnamesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig">DataCloudflareCustomHostnamesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig">DataCloudflareCustomHostnamesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetSsl">resetSsl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetSsl` <a name="resetSsl" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.resetSsl"></a>

```typescript
public resetSsl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareCustomHostnames resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isConstruct"></a>

```typescript
import { dataCloudflareCustomHostnames } from '@cdktf/provider-cloudflare'

dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isTerraformElement"></a>

```typescript
import { dataCloudflareCustomHostnames } from '@cdktf/provider-cloudflare'

dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isTerraformDataSource"></a>

```typescript
import { dataCloudflareCustomHostnames } from '@cdktf/provider-cloudflare'

dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.generateConfigForImport"></a>

```typescript
import { dataCloudflareCustomHostnames } from '@cdktf/provider-cloudflare'

dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareCustomHostnames resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareCustomHostnames to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareCustomHostnames that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/custom_hostnames#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareCustomHostnames to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList">DataCloudflareCustomHostnamesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.sslInput">sslInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.ssl">ssl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.result"></a>

```typescript
public readonly result: DataCloudflareCustomHostnamesResultList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList">DataCloudflareCustomHostnamesResultList</a>

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `sslInput`<sup>Optional</sup> <a name="sslInput" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.sslInput"></a>

```typescript
public readonly sslInput: number;
```

- *Type:* number

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.ssl"></a>

```typescript
public readonly ssl: number;
```

- *Type:* number

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnames.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareCustomHostnamesConfig <a name="DataCloudflareCustomHostnamesConfig" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.Initializer"></a>

```typescript
import { dataCloudflareCustomHostnames } from '@cdktf/provider-cloudflare'

const dataCloudflareCustomHostnamesConfig: dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.direction">direction</a></code> | <code>string</code> | Direction to order hostnames. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.hostname">hostname</a></code> | <code>string</code> | Fully qualified domain name to match against. This parameter cannot be used with the 'id' parameter. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.id">id</a></code> | <code>string</code> | Hostname ID to match against. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.order">order</a></code> | <code>string</code> | Field to order hostnames by. Available values: "ssl", "ssl_status". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.ssl">ssl</a></code> | <code>number</code> | Whether to filter hostnames based on if they have SSL enabled. Available values: 0, 1. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/custom_hostnames#zone_id DataCloudflareCustomHostnames#zone_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Direction to order hostnames. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/custom_hostnames#direction DataCloudflareCustomHostnames#direction}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Fully qualified domain name to match against. This parameter cannot be used with the 'id' parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/custom_hostnames#hostname DataCloudflareCustomHostnames#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Hostname ID to match against.

This ID was generated and returned during the initial custom_hostname creation. This parameter cannot be used with the 'hostname' parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/custom_hostnames#id DataCloudflareCustomHostnames#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/custom_hostnames#max_items DataCloudflareCustomHostnames#max_items}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Field to order hostnames by. Available values: "ssl", "ssl_status".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/custom_hostnames#order DataCloudflareCustomHostnames#order}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesConfig.property.ssl"></a>

```typescript
public readonly ssl: number;
```

- *Type:* number

Whether to filter hostnames based on if they have SSL enabled. Available values: 0, 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/custom_hostnames#ssl DataCloudflareCustomHostnames#ssl}

---

### DataCloudflareCustomHostnamesResult <a name="DataCloudflareCustomHostnamesResult" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResult.Initializer"></a>

```typescript
import { dataCloudflareCustomHostnames } from '@cdktf/provider-cloudflare'

const dataCloudflareCustomHostnamesResult: dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResult = { ... }
```


### DataCloudflareCustomHostnamesResultOwnershipVerification <a name="DataCloudflareCustomHostnamesResultOwnershipVerification" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerification.Initializer"></a>

```typescript
import { dataCloudflareCustomHostnames } from '@cdktf/provider-cloudflare'

const dataCloudflareCustomHostnamesResultOwnershipVerification: dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerification = { ... }
```


### DataCloudflareCustomHostnamesResultOwnershipVerificationHttp <a name="DataCloudflareCustomHostnamesResultOwnershipVerificationHttp" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttp.Initializer"></a>

```typescript
import { dataCloudflareCustomHostnames } from '@cdktf/provider-cloudflare'

const dataCloudflareCustomHostnamesResultOwnershipVerificationHttp: dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttp = { ... }
```


### DataCloudflareCustomHostnamesResultSsl <a name="DataCloudflareCustomHostnamesResultSsl" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSsl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSsl.Initializer"></a>

```typescript
import { dataCloudflareCustomHostnames } from '@cdktf/provider-cloudflare'

const dataCloudflareCustomHostnamesResultSsl: dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSsl = { ... }
```


### DataCloudflareCustomHostnamesResultSslSettings <a name="DataCloudflareCustomHostnamesResultSslSettings" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettings.Initializer"></a>

```typescript
import { dataCloudflareCustomHostnames } from '@cdktf/provider-cloudflare'

const dataCloudflareCustomHostnamesResultSslSettings: dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettings = { ... }
```


### DataCloudflareCustomHostnamesResultSslValidationErrors <a name="DataCloudflareCustomHostnamesResultSslValidationErrors" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrors.Initializer"></a>

```typescript
import { dataCloudflareCustomHostnames } from '@cdktf/provider-cloudflare'

const dataCloudflareCustomHostnamesResultSslValidationErrors: dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrors = { ... }
```


### DataCloudflareCustomHostnamesResultSslValidationRecords <a name="DataCloudflareCustomHostnamesResultSslValidationRecords" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecords.Initializer"></a>

```typescript
import { dataCloudflareCustomHostnames } from '@cdktf/provider-cloudflare'

const dataCloudflareCustomHostnamesResultSslValidationRecords: dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecords = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareCustomHostnamesResultList <a name="DataCloudflareCustomHostnamesResultList" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.Initializer"></a>

```typescript
import { dataCloudflareCustomHostnames } from '@cdktf/provider-cloudflare'

new dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.get"></a>

```typescript
public get(index: number): DataCloudflareCustomHostnamesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareCustomHostnamesResultOutputReference <a name="DataCloudflareCustomHostnamesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareCustomHostnames } from '@cdktf/provider-cloudflare'

new dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.customMetadata">customMetadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.customOriginServer">customOriginServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.customOriginSni">customOriginSni</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.ownershipVerification">ownershipVerification</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference">DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.ownershipVerificationHttp">ownershipVerificationHttp</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference">DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.ssl">ssl</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference">DataCloudflareCustomHostnamesResultSslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.verificationErrors">verificationErrors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResult">DataCloudflareCustomHostnamesResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `customMetadata`<sup>Required</sup> <a name="customMetadata" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.customMetadata"></a>

```typescript
public readonly customMetadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `customOriginServer`<sup>Required</sup> <a name="customOriginServer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.customOriginServer"></a>

```typescript
public readonly customOriginServer: string;
```

- *Type:* string

---

##### `customOriginSni`<sup>Required</sup> <a name="customOriginSni" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.customOriginSni"></a>

```typescript
public readonly customOriginSni: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ownershipVerification`<sup>Required</sup> <a name="ownershipVerification" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.ownershipVerification"></a>

```typescript
public readonly ownershipVerification: DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference">DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference</a>

---

##### `ownershipVerificationHttp`<sup>Required</sup> <a name="ownershipVerificationHttp" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.ownershipVerificationHttp"></a>

```typescript
public readonly ownershipVerificationHttp: DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference">DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference</a>

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.ssl"></a>

```typescript
public readonly ssl: DataCloudflareCustomHostnamesResultSslOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference">DataCloudflareCustomHostnamesResultSslOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `verificationErrors`<sup>Required</sup> <a name="verificationErrors" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.verificationErrors"></a>

```typescript
public readonly verificationErrors: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareCustomHostnamesResult;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResult">DataCloudflareCustomHostnamesResult</a>

---


### DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference <a name="DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.Initializer"></a>

```typescript
import { dataCloudflareCustomHostnames } from '@cdktf/provider-cloudflare'

new dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.httpBody">httpBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.httpUrl">httpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttp">DataCloudflareCustomHostnamesResultOwnershipVerificationHttp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpBody`<sup>Required</sup> <a name="httpBody" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.httpBody"></a>

```typescript
public readonly httpBody: string;
```

- *Type:* string

---

##### `httpUrl`<sup>Required</sup> <a name="httpUrl" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.httpUrl"></a>

```typescript
public readonly httpUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareCustomHostnamesResultOwnershipVerificationHttp;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationHttp">DataCloudflareCustomHostnamesResultOwnershipVerificationHttp</a>

---


### DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference <a name="DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.Initializer"></a>

```typescript
import { dataCloudflareCustomHostnames } from '@cdktf/provider-cloudflare'

new dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerification">DataCloudflareCustomHostnamesResultOwnershipVerification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareCustomHostnamesResultOwnershipVerification;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultOwnershipVerification">DataCloudflareCustomHostnamesResultOwnershipVerification</a>

---


### DataCloudflareCustomHostnamesResultSslOutputReference <a name="DataCloudflareCustomHostnamesResultSslOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.Initializer"></a>

```typescript
import { dataCloudflareCustomHostnames } from '@cdktf/provider-cloudflare'

new dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.bundleMethod">bundleMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.certificateAuthority">certificateAuthority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.customCertificate">customCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.customCsrId">customCsrId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.customKey">customKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.hosts">hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference">DataCloudflareCustomHostnamesResultSslSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.signature">signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.uploadedOn">uploadedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.validationErrors">validationErrors</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList">DataCloudflareCustomHostnamesResultSslValidationErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.validationRecords">validationRecords</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList">DataCloudflareCustomHostnamesResultSslValidationRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.wildcard">wildcard</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSsl">DataCloudflareCustomHostnamesResultSsl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bundleMethod`<sup>Required</sup> <a name="bundleMethod" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.bundleMethod"></a>

```typescript
public readonly bundleMethod: string;
```

- *Type:* string

---

##### `certificateAuthority`<sup>Required</sup> <a name="certificateAuthority" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.certificateAuthority"></a>

```typescript
public readonly certificateAuthority: string;
```

- *Type:* string

---

##### `customCertificate`<sup>Required</sup> <a name="customCertificate" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.customCertificate"></a>

```typescript
public readonly customCertificate: string;
```

- *Type:* string

---

##### `customCsrId`<sup>Required</sup> <a name="customCsrId" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.customCsrId"></a>

```typescript
public readonly customCsrId: string;
```

- *Type:* string

---

##### `customKey`<sup>Required</sup> <a name="customKey" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.customKey"></a>

```typescript
public readonly customKey: string;
```

- *Type:* string

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.settings"></a>

```typescript
public readonly settings: DataCloudflareCustomHostnamesResultSslSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference">DataCloudflareCustomHostnamesResultSslSettingsOutputReference</a>

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uploadedOn`<sup>Required</sup> <a name="uploadedOn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.uploadedOn"></a>

```typescript
public readonly uploadedOn: string;
```

- *Type:* string

---

##### `validationErrors`<sup>Required</sup> <a name="validationErrors" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.validationErrors"></a>

```typescript
public readonly validationErrors: DataCloudflareCustomHostnamesResultSslValidationErrorsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList">DataCloudflareCustomHostnamesResultSslValidationErrorsList</a>

---

##### `validationRecords`<sup>Required</sup> <a name="validationRecords" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.validationRecords"></a>

```typescript
public readonly validationRecords: DataCloudflareCustomHostnamesResultSslValidationRecordsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList">DataCloudflareCustomHostnamesResultSslValidationRecordsList</a>

---

##### `wildcard`<sup>Required</sup> <a name="wildcard" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.wildcard"></a>

```typescript
public readonly wildcard: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareCustomHostnamesResultSsl;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSsl">DataCloudflareCustomHostnamesResultSsl</a>

---


### DataCloudflareCustomHostnamesResultSslSettingsOutputReference <a name="DataCloudflareCustomHostnamesResultSslSettingsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareCustomHostnames } from '@cdktf/provider-cloudflare'

new dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.ciphers">ciphers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.earlyHints">earlyHints</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.http2">http2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.minTlsVersion">minTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.tls13">tls13</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettings">DataCloudflareCustomHostnamesResultSslSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ciphers`<sup>Required</sup> <a name="ciphers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.ciphers"></a>

```typescript
public readonly ciphers: string[];
```

- *Type:* string[]

---

##### `earlyHints`<sup>Required</sup> <a name="earlyHints" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.earlyHints"></a>

```typescript
public readonly earlyHints: string;
```

- *Type:* string

---

##### `http2`<sup>Required</sup> <a name="http2" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.http2"></a>

```typescript
public readonly http2: string;
```

- *Type:* string

---

##### `minTlsVersion`<sup>Required</sup> <a name="minTlsVersion" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.minTlsVersion"></a>

```typescript
public readonly minTlsVersion: string;
```

- *Type:* string

---

##### `tls13`<sup>Required</sup> <a name="tls13" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.tls13"></a>

```typescript
public readonly tls13: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareCustomHostnamesResultSslSettings;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslSettings">DataCloudflareCustomHostnamesResultSslSettings</a>

---


### DataCloudflareCustomHostnamesResultSslValidationErrorsList <a name="DataCloudflareCustomHostnamesResultSslValidationErrorsList" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.Initializer"></a>

```typescript
import { dataCloudflareCustomHostnames } from '@cdktf/provider-cloudflare'

new dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.get"></a>

```typescript
public get(index: number): DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference <a name="DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareCustomHostnames } from '@cdktf/provider-cloudflare'

new dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrors">DataCloudflareCustomHostnamesResultSslValidationErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareCustomHostnamesResultSslValidationErrors;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationErrors">DataCloudflareCustomHostnamesResultSslValidationErrors</a>

---


### DataCloudflareCustomHostnamesResultSslValidationRecordsList <a name="DataCloudflareCustomHostnamesResultSslValidationRecordsList" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.Initializer"></a>

```typescript
import { dataCloudflareCustomHostnames } from '@cdktf/provider-cloudflare'

new dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.get"></a>

```typescript
public get(index: number): DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference <a name="DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareCustomHostnames } from '@cdktf/provider-cloudflare'

new dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.emails">emails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.httpBody">httpBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.httpUrl">httpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.txtName">txtName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.txtValue">txtValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecords">DataCloudflareCustomHostnamesResultSslValidationRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.emails"></a>

```typescript
public readonly emails: string[];
```

- *Type:* string[]

---

##### `httpBody`<sup>Required</sup> <a name="httpBody" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.httpBody"></a>

```typescript
public readonly httpBody: string;
```

- *Type:* string

---

##### `httpUrl`<sup>Required</sup> <a name="httpUrl" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.httpUrl"></a>

```typescript
public readonly httpUrl: string;
```

- *Type:* string

---

##### `txtName`<sup>Required</sup> <a name="txtName" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.txtName"></a>

```typescript
public readonly txtName: string;
```

- *Type:* string

---

##### `txtValue`<sup>Required</sup> <a name="txtValue" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.txtValue"></a>

```typescript
public readonly txtValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareCustomHostnamesResultSslValidationRecords;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCustomHostnames.DataCloudflareCustomHostnamesResultSslValidationRecords">DataCloudflareCustomHostnamesResultSslValidationRecords</a>

---



