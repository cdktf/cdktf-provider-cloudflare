# `dataCloudflareZeroTrustGatewayCertificate` Submodule <a name="`dataCloudflareZeroTrustGatewayCertificate` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustGatewayCertificate <a name="DataCloudflareZeroTrustGatewayCertificate" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_gateway_certificate cloudflare_zero_trust_gateway_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustGatewayCertificate } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate(scope: Construct, id: string, config: DataCloudflareZeroTrustGatewayCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificateConfig">DataCloudflareZeroTrustGatewayCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificateConfig">DataCloudflareZeroTrustGatewayCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.resetCertificateId">resetCertificateId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCertificateId` <a name="resetCertificateId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.resetCertificateId"></a>

```typescript
public resetCertificateId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustGatewayCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustGatewayCertificate } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustGatewayCertificate } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustGatewayCertificate } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustGatewayCertificate } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustGatewayCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustGatewayCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustGatewayCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_gateway_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustGatewayCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.bindingStatus">bindingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.inUse">inUse</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.issuerOrg">issuerOrg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.issuerRaw">issuerRaw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.uploadedOn">uploadedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.certificateIdInput">certificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `bindingStatus`<sup>Required</sup> <a name="bindingStatus" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.bindingStatus"></a>

```typescript
public readonly bindingStatus: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inUse`<sup>Required</sup> <a name="inUse" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.inUse"></a>

```typescript
public readonly inUse: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `issuerOrg`<sup>Required</sup> <a name="issuerOrg" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.issuerOrg"></a>

```typescript
public readonly issuerOrg: string;
```

- *Type:* string

---

##### `issuerRaw`<sup>Required</sup> <a name="issuerRaw" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.issuerRaw"></a>

```typescript
public readonly issuerRaw: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `uploadedOn`<sup>Required</sup> <a name="uploadedOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.uploadedOn"></a>

```typescript
public readonly uploadedOn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.certificateIdInput"></a>

```typescript
public readonly certificateIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustGatewayCertificateConfig <a name="DataCloudflareZeroTrustGatewayCertificateConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificateConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustGatewayCertificate } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustGatewayCertificateConfig: dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificateConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_gateway_certificate#account_id DataCloudflareZeroTrustGatewayCertificate#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificateConfig.property.certificateId">certificateId</a></code> | <code>string</code> | Certificate UUID tag. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificateConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_gateway_certificate#account_id DataCloudflareZeroTrustGatewayCertificate#account_id}.

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCertificate.DataCloudflareZeroTrustGatewayCertificateConfig.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

Certificate UUID tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_gateway_certificate#certificate_id DataCloudflareZeroTrustGatewayCertificate#certificate_id}

---



