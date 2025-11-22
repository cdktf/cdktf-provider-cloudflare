# `dataCloudflareZeroTrustDeviceCustomProfiles` Submodule <a name="`dataCloudflareZeroTrustDeviceCustomProfiles` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDeviceCustomProfiles <a name="DataCloudflareZeroTrustDeviceCustomProfiles" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_device_custom_profiles cloudflare_zero_trust_device_custom_profiles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfiles } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles(scope: Construct, id: string, config: DataCloudflareZeroTrustDeviceCustomProfilesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig">DataCloudflareZeroTrustDeviceCustomProfilesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig">DataCloudflareZeroTrustDeviceCustomProfilesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceCustomProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfiles } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfiles } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfiles } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfiles } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceCustomProfiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustDeviceCustomProfiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustDeviceCustomProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_device_custom_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDeviceCustomProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList">DataCloudflareZeroTrustDeviceCustomProfilesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.result"></a>

```typescript
public readonly result: DataCloudflareZeroTrustDeviceCustomProfilesResultList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList">DataCloudflareZeroTrustDeviceCustomProfilesResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfiles.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDeviceCustomProfilesConfig <a name="DataCloudflareZeroTrustDeviceCustomProfilesConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfiles } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDeviceCustomProfilesConfig: dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_device_custom_profiles#account_id DataCloudflareZeroTrustDeviceCustomProfiles#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_device_custom_profiles#account_id DataCloudflareZeroTrustDeviceCustomProfiles#account_id}.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_device_custom_profiles#max_items DataCloudflareZeroTrustDeviceCustomProfiles#max_items}

---

### DataCloudflareZeroTrustDeviceCustomProfilesResult <a name="DataCloudflareZeroTrustDeviceCustomProfilesResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResult.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfiles } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDeviceCustomProfilesResult: dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResult = { ... }
```


### DataCloudflareZeroTrustDeviceCustomProfilesResultExclude <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultExclude" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExclude.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfiles } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDeviceCustomProfilesResultExclude: dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExclude = { ... }
```


### DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfiles } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains: dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains = { ... }
```


### DataCloudflareZeroTrustDeviceCustomProfilesResultInclude <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultInclude" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultInclude.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfiles } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDeviceCustomProfilesResultInclude: dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultInclude = { ... }
```


### DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2 <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfiles } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2: dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2 = { ... }
```


### DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfiles } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests: dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfiles } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfiles } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExclude">DataCloudflareZeroTrustDeviceCustomProfilesResultExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDeviceCustomProfilesResultExclude;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExclude">DataCloudflareZeroTrustDeviceCustomProfilesResultExclude</a>

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfiles } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfiles } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.dnsServer">dnsServer</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.suffix">suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains">DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.dnsServer"></a>

```typescript
public readonly dnsServer: string[];
```

- *Type:* string[]

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains">DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomains</a>

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfiles } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfiles } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultInclude">DataCloudflareZeroTrustDeviceCustomProfilesResultInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDeviceCustomProfilesResultInclude;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultInclude">DataCloudflareZeroTrustDeviceCustomProfilesResultInclude</a>

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultList <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfiles } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfiles } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.allowedToLeave">allowedToLeave</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.allowModeSwitch">allowModeSwitch</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.allowUpdates">allowUpdates</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.autoConnect">autoConnect</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.captivePortal">captivePortal</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.default">default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.disableAutoFallback">disableAutoFallback</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.exclude">exclude</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList">DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.excludeOfficeIps">excludeOfficeIps</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.fallbackDomains">fallbackDomains</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList">DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.gatewayUniqueId">gatewayUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.include">include</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList">DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.lanAllowMinutes">lanAllowMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.lanAllowSubnetSize">lanAllowSubnetSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.match">match</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.precedence">precedence</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.registerInterfaceIpWithDns">registerInterfaceIpWithDns</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.sccmVpnBoundarySupport">sccmVpnBoundarySupport</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.serviceModeV2">serviceModeV2</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference">DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.supportUrl">supportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.switchLocked">switchLocked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.targetTests">targetTests</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList">DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.tunnelProtocol">tunnelProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResult">DataCloudflareZeroTrustDeviceCustomProfilesResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedToLeave`<sup>Required</sup> <a name="allowedToLeave" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.allowedToLeave"></a>

```typescript
public readonly allowedToLeave: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `allowModeSwitch`<sup>Required</sup> <a name="allowModeSwitch" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.allowModeSwitch"></a>

```typescript
public readonly allowModeSwitch: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `allowUpdates`<sup>Required</sup> <a name="allowUpdates" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.allowUpdates"></a>

```typescript
public readonly allowUpdates: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `autoConnect`<sup>Required</sup> <a name="autoConnect" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.autoConnect"></a>

```typescript
public readonly autoConnect: number;
```

- *Type:* number

---

##### `captivePortal`<sup>Required</sup> <a name="captivePortal" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.captivePortal"></a>

```typescript
public readonly captivePortal: number;
```

- *Type:* number

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.default"></a>

```typescript
public readonly default: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableAutoFallback`<sup>Required</sup> <a name="disableAutoFallback" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.disableAutoFallback"></a>

```typescript
public readonly disableAutoFallback: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.exclude"></a>

```typescript
public readonly exclude: DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList">DataCloudflareZeroTrustDeviceCustomProfilesResultExcludeList</a>

---

##### `excludeOfficeIps`<sup>Required</sup> <a name="excludeOfficeIps" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.excludeOfficeIps"></a>

```typescript
public readonly excludeOfficeIps: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `fallbackDomains`<sup>Required</sup> <a name="fallbackDomains" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.fallbackDomains"></a>

```typescript
public readonly fallbackDomains: DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList">DataCloudflareZeroTrustDeviceCustomProfilesResultFallbackDomainsList</a>

---

##### `gatewayUniqueId`<sup>Required</sup> <a name="gatewayUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.gatewayUniqueId"></a>

```typescript
public readonly gatewayUniqueId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.include"></a>

```typescript
public readonly include: DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList">DataCloudflareZeroTrustDeviceCustomProfilesResultIncludeList</a>

---

##### `lanAllowMinutes`<sup>Required</sup> <a name="lanAllowMinutes" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.lanAllowMinutes"></a>

```typescript
public readonly lanAllowMinutes: number;
```

- *Type:* number

---

##### `lanAllowSubnetSize`<sup>Required</sup> <a name="lanAllowSubnetSize" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.lanAllowSubnetSize"></a>

```typescript
public readonly lanAllowSubnetSize: number;
```

- *Type:* number

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.precedence"></a>

```typescript
public readonly precedence: number;
```

- *Type:* number

---

##### `registerInterfaceIpWithDns`<sup>Required</sup> <a name="registerInterfaceIpWithDns" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.registerInterfaceIpWithDns"></a>

```typescript
public readonly registerInterfaceIpWithDns: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `sccmVpnBoundarySupport`<sup>Required</sup> <a name="sccmVpnBoundarySupport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.sccmVpnBoundarySupport"></a>

```typescript
public readonly sccmVpnBoundarySupport: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `serviceModeV2`<sup>Required</sup> <a name="serviceModeV2" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.serviceModeV2"></a>

```typescript
public readonly serviceModeV2: DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference">DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference</a>

---

##### `supportUrl`<sup>Required</sup> <a name="supportUrl" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.supportUrl"></a>

```typescript
public readonly supportUrl: string;
```

- *Type:* string

---

##### `switchLocked`<sup>Required</sup> <a name="switchLocked" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.switchLocked"></a>

```typescript
public readonly switchLocked: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `targetTests`<sup>Required</sup> <a name="targetTests" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.targetTests"></a>

```typescript
public readonly targetTests: DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList">DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList</a>

---

##### `tunnelProtocol`<sup>Required</sup> <a name="tunnelProtocol" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.tunnelProtocol"></a>

```typescript
public readonly tunnelProtocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDeviceCustomProfilesResult;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResult">DataCloudflareZeroTrustDeviceCustomProfilesResult</a>

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfiles } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2">DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2">DataCloudflareZeroTrustDeviceCustomProfilesResultServiceModeV2</a>

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfiles } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfiles } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests">DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfiles.DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests">DataCloudflareZeroTrustDeviceCustomProfilesResultTargetTests</a>

---



