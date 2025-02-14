# `dataCloudflareZeroTrustDeviceDefaultProfileCertificates` Submodule <a name="`dataCloudflareZeroTrustDeviceDefaultProfileCertificates` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDeviceDefaultProfileCertificates <a name="DataCloudflareZeroTrustDeviceDefaultProfileCertificates" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_device_default_profile_certificates cloudflare_zero_trust_device_default_profile_certificates}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDefaultProfileCertificates } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates(scope: Construct, id: string, config: DataCloudflareZeroTrustDeviceDefaultProfileCertificatesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificatesConfig">DataCloudflareZeroTrustDeviceDefaultProfileCertificatesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificatesConfig">DataCloudflareZeroTrustDeviceDefaultProfileCertificatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceDefaultProfileCertificates resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDefaultProfileCertificates } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDefaultProfileCertificates } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDefaultProfileCertificates } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDefaultProfileCertificates } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustDeviceDefaultProfileCertificates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustDeviceDefaultProfileCertificates to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustDeviceDefaultProfileCertificates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_device_default_profile_certificates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDeviceDefaultProfileCertificates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificates.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDeviceDefaultProfileCertificatesConfig <a name="DataCloudflareZeroTrustDeviceDefaultProfileCertificatesConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificatesConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDefaultProfileCertificates } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDeviceDefaultProfileCertificatesConfig: dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificatesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificatesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificatesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificatesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificatesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificatesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificatesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificatesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificatesConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_device_default_profile_certificates#zone_id DataCloudflareZeroTrustDeviceDefaultProfileCertificates#zone_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificatesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificatesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificatesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificatesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificatesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificatesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificatesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfileCertificates.DataCloudflareZeroTrustDeviceDefaultProfileCertificatesConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_device_default_profile_certificates#zone_id DataCloudflareZeroTrustDeviceDefaultProfileCertificates#zone_id}.

---



