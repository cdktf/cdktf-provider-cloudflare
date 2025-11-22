# `dataCloudflareEmailRoutingAddresses` Submodule <a name="`dataCloudflareEmailRoutingAddresses` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailRoutingAddresses <a name="DataCloudflareEmailRoutingAddresses" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_routing_addresses cloudflare_email_routing_addresses}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.Initializer"></a>

```typescript
import { dataCloudflareEmailRoutingAddresses } from '@cdktf/provider-cloudflare'

new dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses(scope: Construct, id: string, config: DataCloudflareEmailRoutingAddressesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesConfig">DataCloudflareEmailRoutingAddressesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesConfig">DataCloudflareEmailRoutingAddressesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.resetVerified">resetVerified</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetVerified` <a name="resetVerified" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.resetVerified"></a>

```typescript
public resetVerified(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareEmailRoutingAddresses resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.isConstruct"></a>

```typescript
import { dataCloudflareEmailRoutingAddresses } from '@cdktf/provider-cloudflare'

dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.isTerraformElement"></a>

```typescript
import { dataCloudflareEmailRoutingAddresses } from '@cdktf/provider-cloudflare'

dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.isTerraformDataSource"></a>

```typescript
import { dataCloudflareEmailRoutingAddresses } from '@cdktf/provider-cloudflare'

dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.generateConfigForImport"></a>

```typescript
import { dataCloudflareEmailRoutingAddresses } from '@cdktf/provider-cloudflare'

dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareEmailRoutingAddresses resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareEmailRoutingAddresses to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareEmailRoutingAddresses that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_routing_addresses#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailRoutingAddresses to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList">DataCloudflareEmailRoutingAddressesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.verifiedInput">verifiedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.verified">verified</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.result"></a>

```typescript
public readonly result: DataCloudflareEmailRoutingAddressesResultList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList">DataCloudflareEmailRoutingAddressesResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `verifiedInput`<sup>Optional</sup> <a name="verifiedInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.verifiedInput"></a>

```typescript
public readonly verifiedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `verified`<sup>Required</sup> <a name="verified" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.verified"></a>

```typescript
public readonly verified: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddresses.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailRoutingAddressesConfig <a name="DataCloudflareEmailRoutingAddressesConfig" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesConfig.Initializer"></a>

```typescript
import { dataCloudflareEmailRoutingAddresses } from '@cdktf/provider-cloudflare'

const dataCloudflareEmailRoutingAddressesConfig: dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesConfig.property.direction">direction</a></code> | <code>string</code> | Sorts results in an ascending or descending order. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesConfig.property.verified">verified</a></code> | <code>boolean \| cdktf.IResolvable</code> | Filter by verified destination addresses. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_routing_addresses#account_id DataCloudflareEmailRoutingAddresses#account_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesConfig.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Sorts results in an ascending or descending order. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_routing_addresses#direction DataCloudflareEmailRoutingAddresses#direction}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_routing_addresses#max_items DataCloudflareEmailRoutingAddresses#max_items}

---

##### `verified`<sup>Optional</sup> <a name="verified" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesConfig.property.verified"></a>

```typescript
public readonly verified: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Filter by verified destination addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/email_routing_addresses#verified DataCloudflareEmailRoutingAddresses#verified}

---

### DataCloudflareEmailRoutingAddressesResult <a name="DataCloudflareEmailRoutingAddressesResult" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResult.Initializer"></a>

```typescript
import { dataCloudflareEmailRoutingAddresses } from '@cdktf/provider-cloudflare'

const dataCloudflareEmailRoutingAddressesResult: dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailRoutingAddressesResultList <a name="DataCloudflareEmailRoutingAddressesResultList" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList.Initializer"></a>

```typescript
import { dataCloudflareEmailRoutingAddresses } from '@cdktf/provider-cloudflare'

new dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList.get"></a>

```typescript
public get(index: number): DataCloudflareEmailRoutingAddressesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareEmailRoutingAddressesResultOutputReference <a name="DataCloudflareEmailRoutingAddressesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareEmailRoutingAddresses } from '@cdktf/provider-cloudflare'

new dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.property.modified">modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.property.verified">verified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResult">DataCloudflareEmailRoutingAddressesResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.property.modified"></a>

```typescript
public readonly modified: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `verified`<sup>Required</sup> <a name="verified" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.property.verified"></a>

```typescript
public readonly verified: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareEmailRoutingAddressesResult;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddresses.DataCloudflareEmailRoutingAddressesResult">DataCloudflareEmailRoutingAddressesResult</a>

---



