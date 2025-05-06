# `dataCloudflareEmailRoutingAddress` Submodule <a name="`dataCloudflareEmailRoutingAddress` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailRoutingAddress <a name="DataCloudflareEmailRoutingAddress" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/email_routing_address cloudflare_email_routing_address}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer"></a>

```typescript
import { dataCloudflareEmailRoutingAddress } from '@cdktf/provider-cloudflare'

new dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress(scope: Construct, id: string, config: DataCloudflareEmailRoutingAddressConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig">DataCloudflareEmailRoutingAddressConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig">DataCloudflareEmailRoutingAddressConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.resetDestinationAddressIdentifier">resetDestinationAddressIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareEmailRoutingAddressFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter">DataCloudflareEmailRoutingAddressFilter</a>

---

##### `resetDestinationAddressIdentifier` <a name="resetDestinationAddressIdentifier" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.resetDestinationAddressIdentifier"></a>

```typescript
public resetDestinationAddressIdentifier(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.resetFilter"></a>

```typescript
public resetFilter(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareEmailRoutingAddress resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.isConstruct"></a>

```typescript
import { dataCloudflareEmailRoutingAddress } from '@cdktf/provider-cloudflare'

dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.isTerraformElement"></a>

```typescript
import { dataCloudflareEmailRoutingAddress } from '@cdktf/provider-cloudflare'

dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.isTerraformDataSource"></a>

```typescript
import { dataCloudflareEmailRoutingAddress } from '@cdktf/provider-cloudflare'

dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.generateConfigForImport"></a>

```typescript
import { dataCloudflareEmailRoutingAddress } from '@cdktf/provider-cloudflare'

dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareEmailRoutingAddress resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareEmailRoutingAddress to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareEmailRoutingAddress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/email_routing_address#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailRoutingAddress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference">DataCloudflareEmailRoutingAddressFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.modified">modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.verified">verified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.destinationAddressIdentifierInput">destinationAddressIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter">DataCloudflareEmailRoutingAddressFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.destinationAddressIdentifier">destinationAddressIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.filter"></a>

```typescript
public readonly filter: DataCloudflareEmailRoutingAddressFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference">DataCloudflareEmailRoutingAddressFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.modified"></a>

```typescript
public readonly modified: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `verified`<sup>Required</sup> <a name="verified" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.verified"></a>

```typescript
public readonly verified: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `destinationAddressIdentifierInput`<sup>Optional</sup> <a name="destinationAddressIdentifierInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.destinationAddressIdentifierInput"></a>

```typescript
public readonly destinationAddressIdentifierInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareEmailRoutingAddressFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter">DataCloudflareEmailRoutingAddressFilter</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `destinationAddressIdentifier`<sup>Required</sup> <a name="destinationAddressIdentifier" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.destinationAddressIdentifier"></a>

```typescript
public readonly destinationAddressIdentifier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddress.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailRoutingAddressConfig <a name="DataCloudflareEmailRoutingAddressConfig" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.Initializer"></a>

```typescript
import { dataCloudflareEmailRoutingAddress } from '@cdktf/provider-cloudflare'

const dataCloudflareEmailRoutingAddressConfig: dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.destinationAddressIdentifier">destinationAddressIdentifier</a></code> | <code>string</code> | Destination address identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter">DataCloudflareEmailRoutingAddressFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/email_routing_address#filter DataCloudflareEmailRoutingAddress#filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/email_routing_address#account_id DataCloudflareEmailRoutingAddress#account_id}

---

##### `destinationAddressIdentifier`<sup>Optional</sup> <a name="destinationAddressIdentifier" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.destinationAddressIdentifier"></a>

```typescript
public readonly destinationAddressIdentifier: string;
```

- *Type:* string

Destination address identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/email_routing_address#destination_address_identifier DataCloudflareEmailRoutingAddress#destination_address_identifier}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareEmailRoutingAddressFilter;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter">DataCloudflareEmailRoutingAddressFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/email_routing_address#filter DataCloudflareEmailRoutingAddress#filter}.

---

### DataCloudflareEmailRoutingAddressFilter <a name="DataCloudflareEmailRoutingAddressFilter" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter.Initializer"></a>

```typescript
import { dataCloudflareEmailRoutingAddress } from '@cdktf/provider-cloudflare'

const dataCloudflareEmailRoutingAddressFilter: dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter.property.direction">direction</a></code> | <code>string</code> | Sorts results in an ascending or descending order. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter.property.verified">verified</a></code> | <code>boolean \| cdktf.IResolvable</code> | Filter by verified destination addresses. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Sorts results in an ascending or descending order. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/email_routing_address#direction DataCloudflareEmailRoutingAddress#direction}

---

##### `verified`<sup>Optional</sup> <a name="verified" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter.property.verified"></a>

```typescript
public readonly verified: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Filter by verified destination addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/email_routing_address#verified DataCloudflareEmailRoutingAddress#verified}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailRoutingAddressFilterOutputReference <a name="DataCloudflareEmailRoutingAddressFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareEmailRoutingAddress } from '@cdktf/provider-cloudflare'

new dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.resetVerified">resetVerified</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetVerified` <a name="resetVerified" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.resetVerified"></a>

```typescript
public resetVerified(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.verifiedInput">verifiedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.verified">verified</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter">DataCloudflareEmailRoutingAddressFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `verifiedInput`<sup>Optional</sup> <a name="verifiedInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.verifiedInput"></a>

```typescript
public readonly verifiedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `verified`<sup>Required</sup> <a name="verified" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.verified"></a>

```typescript
public readonly verified: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareEmailRoutingAddressFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingAddress.DataCloudflareEmailRoutingAddressFilter">DataCloudflareEmailRoutingAddressFilter</a>

---



