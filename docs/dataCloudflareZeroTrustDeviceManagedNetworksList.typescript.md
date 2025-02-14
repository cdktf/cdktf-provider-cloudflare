# `dataCloudflareZeroTrustDeviceManagedNetworksList` Submodule <a name="`dataCloudflareZeroTrustDeviceManagedNetworksList` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDeviceManagedNetworksList <a name="DataCloudflareZeroTrustDeviceManagedNetworksList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_device_managed_networks_list cloudflare_zero_trust_device_managed_networks_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceManagedNetworksList } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList(scope: Construct, id: string, config: DataCloudflareZeroTrustDeviceManagedNetworksListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListConfig">DataCloudflareZeroTrustDeviceManagedNetworksListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListConfig">DataCloudflareZeroTrustDeviceManagedNetworksListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceManagedNetworksList resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustDeviceManagedNetworksList } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustDeviceManagedNetworksList } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustDeviceManagedNetworksList } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustDeviceManagedNetworksList } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceManagedNetworksList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustDeviceManagedNetworksList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustDeviceManagedNetworksList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_device_managed_networks_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDeviceManagedNetworksList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList">DataCloudflareZeroTrustDeviceManagedNetworksListResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.result"></a>

```typescript
public readonly result: DataCloudflareZeroTrustDeviceManagedNetworksListResultList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList">DataCloudflareZeroTrustDeviceManagedNetworksListResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDeviceManagedNetworksListConfig <a name="DataCloudflareZeroTrustDeviceManagedNetworksListConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceManagedNetworksList } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDeviceManagedNetworksListConfig: dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_device_managed_networks_list#account_id DataCloudflareZeroTrustDeviceManagedNetworksList#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_device_managed_networks_list#account_id DataCloudflareZeroTrustDeviceManagedNetworksList#account_id}.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_device_managed_networks_list#max_items DataCloudflareZeroTrustDeviceManagedNetworksList#max_items}

---

### DataCloudflareZeroTrustDeviceManagedNetworksListResult <a name="DataCloudflareZeroTrustDeviceManagedNetworksListResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResult.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceManagedNetworksList } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDeviceManagedNetworksListResult: dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResult = { ... }
```


### DataCloudflareZeroTrustDeviceManagedNetworksListResultConfig <a name="DataCloudflareZeroTrustDeviceManagedNetworksListResultConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceManagedNetworksList } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDeviceManagedNetworksListResultConfig: dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference <a name="DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceManagedNetworksList } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.property.sha256">sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.property.tlsSockaddr">tlsSockaddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfig">DataCloudflareZeroTrustDeviceManagedNetworksListResultConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.property.sha256"></a>

```typescript
public readonly sha256: string;
```

- *Type:* string

---

##### `tlsSockaddr`<sup>Required</sup> <a name="tlsSockaddr" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.property.tlsSockaddr"></a>

```typescript
public readonly tlsSockaddr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDeviceManagedNetworksListResultConfig;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfig">DataCloudflareZeroTrustDeviceManagedNetworksListResultConfig</a>

---


### DataCloudflareZeroTrustDeviceManagedNetworksListResultList <a name="DataCloudflareZeroTrustDeviceManagedNetworksListResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceManagedNetworksList } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference <a name="DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceManagedNetworksList } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference">DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.property.networkId">networkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResult">DataCloudflareZeroTrustDeviceManagedNetworksListResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.property.config"></a>

```typescript
public readonly config: DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference">DataCloudflareZeroTrustDeviceManagedNetworksListResultConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDeviceManagedNetworksListResult;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceManagedNetworksList.DataCloudflareZeroTrustDeviceManagedNetworksListResult">DataCloudflareZeroTrustDeviceManagedNetworksListResult</a>

---



