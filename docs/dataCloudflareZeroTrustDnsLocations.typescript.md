# `dataCloudflareZeroTrustDnsLocations` Submodule <a name="`dataCloudflareZeroTrustDnsLocations` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDnsLocations <a name="DataCloudflareZeroTrustDnsLocations" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_dns_locations cloudflare_zero_trust_dns_locations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations(scope: Construct, id: string, config: DataCloudflareZeroTrustDnsLocationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsConfig">DataCloudflareZeroTrustDnsLocationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsConfig">DataCloudflareZeroTrustDnsLocationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustDnsLocations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustDnsLocations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustDnsLocations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustDnsLocations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_dns_locations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDnsLocations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList">DataCloudflareZeroTrustDnsLocationsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.result"></a>

```typescript
public readonly result: DataCloudflareZeroTrustDnsLocationsResultList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList">DataCloudflareZeroTrustDnsLocationsResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDnsLocationsConfig <a name="DataCloudflareZeroTrustDnsLocationsConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDnsLocationsConfig: dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_dns_locations#account_id DataCloudflareZeroTrustDnsLocations#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_dns_locations#account_id DataCloudflareZeroTrustDnsLocations#account_id}.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_dns_locations#max_items DataCloudflareZeroTrustDnsLocations#max_items}

---

### DataCloudflareZeroTrustDnsLocationsResult <a name="DataCloudflareZeroTrustDnsLocationsResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResult.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDnsLocationsResult: dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResult = { ... }
```


### DataCloudflareZeroTrustDnsLocationsResultEndpoints <a name="DataCloudflareZeroTrustDnsLocationsResultEndpoints" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpoints.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDnsLocationsResultEndpoints: dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpoints = { ... }
```


### DataCloudflareZeroTrustDnsLocationsResultEndpointsDoh <a name="DataCloudflareZeroTrustDnsLocationsResultEndpointsDoh" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDoh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDoh.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDnsLocationsResultEndpointsDoh: dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDoh = { ... }
```


### DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworks <a name="DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworks" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworks.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworks: dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworks = { ... }
```


### DataCloudflareZeroTrustDnsLocationsResultEndpointsDot <a name="DataCloudflareZeroTrustDnsLocationsResultEndpointsDot" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDot.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDnsLocationsResultEndpointsDot: dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDot = { ... }
```


### DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworks <a name="DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworks" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworks.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworks: dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworks = { ... }
```


### DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4 <a name="DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4: dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4 = { ... }
```


### DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6 <a name="DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6: dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6 = { ... }
```


### DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6Networks <a name="DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6Networks" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6Networks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6Networks.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6Networks: dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6Networks = { ... }
```


### DataCloudflareZeroTrustDnsLocationsResultNetworks <a name="DataCloudflareZeroTrustDnsLocationsResultNetworks" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworks.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDnsLocationsResultNetworks: dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworks = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList <a name="DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference <a name="DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworks">DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworks;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworks">DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworks</a>

---


### DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference <a name="DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList">DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.property.requireToken">requireToken</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDoh">DataCloudflareZeroTrustDnsLocationsResultEndpointsDoh</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.property.networks"></a>

```typescript
public readonly networks: DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList">DataCloudflareZeroTrustDnsLocationsResultEndpointsDohNetworksList</a>

---

##### `requireToken`<sup>Required</sup> <a name="requireToken" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.property.requireToken"></a>

```typescript
public readonly requireToken: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDnsLocationsResultEndpointsDoh;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDoh">DataCloudflareZeroTrustDnsLocationsResultEndpointsDoh</a>

---


### DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList <a name="DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference <a name="DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworks">DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworks;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworks">DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworks</a>

---


### DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference <a name="DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList">DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDot">DataCloudflareZeroTrustDnsLocationsResultEndpointsDot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.property.networks"></a>

```typescript
public readonly networks: DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList">DataCloudflareZeroTrustDnsLocationsResultEndpointsDotNetworksList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDnsLocationsResultEndpointsDot;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDot">DataCloudflareZeroTrustDnsLocationsResultEndpointsDot</a>

---


### DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference <a name="DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4">DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4">DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4</a>

---


### DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList <a name="DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference <a name="DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6Networks">DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6Networks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6Networks;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6Networks">DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6Networks</a>

---


### DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference <a name="DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList">DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6">DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.property.networks"></a>

```typescript
public readonly networks: DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList">DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6NetworksList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6">DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6</a>

---


### DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference <a name="DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.property.doh">doh</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference">DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.property.dot">dot</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference">DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference">DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference">DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpoints">DataCloudflareZeroTrustDnsLocationsResultEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `doh`<sup>Required</sup> <a name="doh" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.property.doh"></a>

```typescript
public readonly doh: DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference">DataCloudflareZeroTrustDnsLocationsResultEndpointsDohOutputReference</a>

---

##### `dot`<sup>Required</sup> <a name="dot" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.property.dot"></a>

```typescript
public readonly dot: DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference">DataCloudflareZeroTrustDnsLocationsResultEndpointsDotOutputReference</a>

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.property.ipv4"></a>

```typescript
public readonly ipv4: DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference">DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv4OutputReference</a>

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.property.ipv6"></a>

```typescript
public readonly ipv6: DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference">DataCloudflareZeroTrustDnsLocationsResultEndpointsIpv6OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDnsLocationsResultEndpoints;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpoints">DataCloudflareZeroTrustDnsLocationsResultEndpoints</a>

---


### DataCloudflareZeroTrustDnsLocationsResultList <a name="DataCloudflareZeroTrustDnsLocationsResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDnsLocationsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDnsLocationsResultNetworksList <a name="DataCloudflareZeroTrustDnsLocationsResultNetworksList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference <a name="DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworks">DataCloudflareZeroTrustDnsLocationsResultNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDnsLocationsResultNetworks;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworks">DataCloudflareZeroTrustDnsLocationsResultNetworks</a>

---


### DataCloudflareZeroTrustDnsLocationsResultOutputReference <a name="DataCloudflareZeroTrustDnsLocationsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDnsLocations } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.clientDefault">clientDefault</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.dnsDestinationIpsId">dnsDestinationIpsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.dnsDestinationIpv6BlockId">dnsDestinationIpv6BlockId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.dohSubdomain">dohSubdomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.ecsSupport">ecsSupport</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference">DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.ipv4Destination">ipv4Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.ipv4DestinationBackup">ipv4DestinationBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList">DataCloudflareZeroTrustDnsLocationsResultNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResult">DataCloudflareZeroTrustDnsLocationsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientDefault`<sup>Required</sup> <a name="clientDefault" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.clientDefault"></a>

```typescript
public readonly clientDefault: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dnsDestinationIpsId`<sup>Required</sup> <a name="dnsDestinationIpsId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.dnsDestinationIpsId"></a>

```typescript
public readonly dnsDestinationIpsId: string;
```

- *Type:* string

---

##### `dnsDestinationIpv6BlockId`<sup>Required</sup> <a name="dnsDestinationIpv6BlockId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.dnsDestinationIpv6BlockId"></a>

```typescript
public readonly dnsDestinationIpv6BlockId: string;
```

- *Type:* string

---

##### `dohSubdomain`<sup>Required</sup> <a name="dohSubdomain" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.dohSubdomain"></a>

```typescript
public readonly dohSubdomain: string;
```

- *Type:* string

---

##### `ecsSupport`<sup>Required</sup> <a name="ecsSupport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.ecsSupport"></a>

```typescript
public readonly ecsSupport: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.endpoints"></a>

```typescript
public readonly endpoints: DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference">DataCloudflareZeroTrustDnsLocationsResultEndpointsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `ipv4Destination`<sup>Required</sup> <a name="ipv4Destination" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.ipv4Destination"></a>

```typescript
public readonly ipv4Destination: string;
```

- *Type:* string

---

##### `ipv4DestinationBackup`<sup>Required</sup> <a name="ipv4DestinationBackup" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.ipv4DestinationBackup"></a>

```typescript
public readonly ipv4DestinationBackup: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.networks"></a>

```typescript
public readonly networks: DataCloudflareZeroTrustDnsLocationsResultNetworksList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultNetworksList">DataCloudflareZeroTrustDnsLocationsResultNetworksList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDnsLocationsResult;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDnsLocations.DataCloudflareZeroTrustDnsLocationsResult">DataCloudflareZeroTrustDnsLocationsResult</a>

---



