# `dataCloudflareZeroTrustDlpIntegrationEntry` Submodule <a name="`dataCloudflareZeroTrustDlpIntegrationEntry` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDlpIntegrationEntry <a name="DataCloudflareZeroTrustDlpIntegrationEntry" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/zero_trust_dlp_integration_entry cloudflare_zero_trust_dlp_integration_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpIntegrationEntry } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry(scope: Construct, id: string, config: DataCloudflareZeroTrustDlpIntegrationEntryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig">DataCloudflareZeroTrustDlpIntegrationEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig">DataCloudflareZeroTrustDlpIntegrationEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.resetEntryId">resetEntryId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEntryId` <a name="resetEntryId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.resetEntryId"></a>

```typescript
public resetEntryId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustDlpIntegrationEntry resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustDlpIntegrationEntry } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustDlpIntegrationEntry } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustDlpIntegrationEntry } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustDlpIntegrationEntry } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustDlpIntegrationEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustDlpIntegrationEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustDlpIntegrationEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/zero_trust_dlp_integration_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDlpIntegrationEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.caseSensitive">caseSensitive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.confidence">confidence</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference">DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.pattern">pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference">DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.secret">secret</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.variant">variant</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference">DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.wordList">wordList</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.entryIdInput">entryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.entryId">entryId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `caseSensitive`<sup>Required</sup> <a name="caseSensitive" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.caseSensitive"></a>

```typescript
public readonly caseSensitive: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `confidence`<sup>Required</sup> <a name="confidence" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.confidence"></a>

```typescript
public readonly confidence: DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference">DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.pattern"></a>

```typescript
public readonly pattern: DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference">DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference</a>

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.secret"></a>

```typescript
public readonly secret: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `variant`<sup>Required</sup> <a name="variant" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.variant"></a>

```typescript
public readonly variant: DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference">DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference</a>

---

##### `wordList`<sup>Required</sup> <a name="wordList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.wordList"></a>

```typescript
public readonly wordList: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `entryIdInput`<sup>Optional</sup> <a name="entryIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.entryIdInput"></a>

```typescript
public readonly entryIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `entryId`<sup>Required</sup> <a name="entryId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.entryId"></a>

```typescript
public readonly entryId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntry.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDlpIntegrationEntryConfidence <a name="DataCloudflareZeroTrustDlpIntegrationEntryConfidence" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidence.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpIntegrationEntry } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDlpIntegrationEntryConfidence: dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidence = { ... }
```


### DataCloudflareZeroTrustDlpIntegrationEntryConfig <a name="DataCloudflareZeroTrustDlpIntegrationEntryConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpIntegrationEntry } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDlpIntegrationEntryConfig: dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/zero_trust_dlp_integration_entry#account_id DataCloudflareZeroTrustDlpIntegrationEntry#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.entryId">entryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/zero_trust_dlp_integration_entry#entry_id DataCloudflareZeroTrustDlpIntegrationEntry#entry_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/zero_trust_dlp_integration_entry#account_id DataCloudflareZeroTrustDlpIntegrationEntry#account_id}.

---

##### `entryId`<sup>Optional</sup> <a name="entryId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfig.property.entryId"></a>

```typescript
public readonly entryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/data-sources/zero_trust_dlp_integration_entry#entry_id DataCloudflareZeroTrustDlpIntegrationEntry#entry_id}.

---

### DataCloudflareZeroTrustDlpIntegrationEntryPattern <a name="DataCloudflareZeroTrustDlpIntegrationEntryPattern" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPattern.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpIntegrationEntry } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDlpIntegrationEntryPattern: dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPattern = { ... }
```


### DataCloudflareZeroTrustDlpIntegrationEntryVariant <a name="DataCloudflareZeroTrustDlpIntegrationEntryVariant" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariant.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpIntegrationEntry } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDlpIntegrationEntryVariant: dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariant = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference <a name="DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpIntegrationEntry } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.aiContextAvailable">aiContextAvailable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.available">available</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidence">DataCloudflareZeroTrustDlpIntegrationEntryConfidence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aiContextAvailable`<sup>Required</sup> <a name="aiContextAvailable" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.aiContextAvailable"></a>

```typescript
public readonly aiContextAvailable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `available`<sup>Required</sup> <a name="available" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.available"></a>

```typescript
public readonly available: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDlpIntegrationEntryConfidence;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryConfidence">DataCloudflareZeroTrustDlpIntegrationEntryConfidence</a>

---


### DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference <a name="DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpIntegrationEntry } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.property.validation">validation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPattern">DataCloudflareZeroTrustDlpIntegrationEntryPattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.property.validation"></a>

```typescript
public readonly validation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPatternOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDlpIntegrationEntryPattern;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryPattern">DataCloudflareZeroTrustDlpIntegrationEntryPattern</a>

---


### DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference <a name="DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpIntegrationEntry } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.property.topicType">topicType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariant">DataCloudflareZeroTrustDlpIntegrationEntryVariant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `topicType`<sup>Required</sup> <a name="topicType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.property.topicType"></a>

```typescript
public readonly topicType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariantOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDlpIntegrationEntryVariant;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpIntegrationEntry.DataCloudflareZeroTrustDlpIntegrationEntryVariant">DataCloudflareZeroTrustDlpIntegrationEntryVariant</a>

---



