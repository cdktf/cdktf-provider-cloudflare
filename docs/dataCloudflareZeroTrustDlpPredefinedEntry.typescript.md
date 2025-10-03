# `dataCloudflareZeroTrustDlpPredefinedEntry` Submodule <a name="`dataCloudflareZeroTrustDlpPredefinedEntry` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDlpPredefinedEntry <a name="DataCloudflareZeroTrustDlpPredefinedEntry" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_dlp_predefined_entry cloudflare_zero_trust_dlp_predefined_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpPredefinedEntry } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry(scope: Construct, id: string, config: DataCloudflareZeroTrustDlpPredefinedEntryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfig">DataCloudflareZeroTrustDlpPredefinedEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfig">DataCloudflareZeroTrustDlpPredefinedEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.resetEntryId">resetEntryId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEntryId` <a name="resetEntryId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.resetEntryId"></a>

```typescript
public resetEntryId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustDlpPredefinedEntry resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustDlpPredefinedEntry } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustDlpPredefinedEntry } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustDlpPredefinedEntry } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustDlpPredefinedEntry } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustDlpPredefinedEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustDlpPredefinedEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustDlpPredefinedEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_dlp_predefined_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDlpPredefinedEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.caseSensitive">caseSensitive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.confidence">confidence</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference">DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.pattern">pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference">DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.secret">secret</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.variant">variant</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference">DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.wordList">wordList</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.entryIdInput">entryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.entryId">entryId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `caseSensitive`<sup>Required</sup> <a name="caseSensitive" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.caseSensitive"></a>

```typescript
public readonly caseSensitive: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `confidence`<sup>Required</sup> <a name="confidence" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.confidence"></a>

```typescript
public readonly confidence: DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference">DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.pattern"></a>

```typescript
public readonly pattern: DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference">DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference</a>

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.secret"></a>

```typescript
public readonly secret: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `variant`<sup>Required</sup> <a name="variant" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.variant"></a>

```typescript
public readonly variant: DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference">DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference</a>

---

##### `wordList`<sup>Required</sup> <a name="wordList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.wordList"></a>

```typescript
public readonly wordList: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `entryIdInput`<sup>Optional</sup> <a name="entryIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.entryIdInput"></a>

```typescript
public readonly entryIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `entryId`<sup>Required</sup> <a name="entryId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.entryId"></a>

```typescript
public readonly entryId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntry.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDlpPredefinedEntryConfidence <a name="DataCloudflareZeroTrustDlpPredefinedEntryConfidence" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidence.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpPredefinedEntry } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDlpPredefinedEntryConfidence: dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidence = { ... }
```


### DataCloudflareZeroTrustDlpPredefinedEntryConfig <a name="DataCloudflareZeroTrustDlpPredefinedEntryConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpPredefinedEntry } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDlpPredefinedEntryConfig: dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_dlp_predefined_entry#account_id DataCloudflareZeroTrustDlpPredefinedEntry#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfig.property.entryId">entryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_dlp_predefined_entry#entry_id DataCloudflareZeroTrustDlpPredefinedEntry#entry_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_dlp_predefined_entry#account_id DataCloudflareZeroTrustDlpPredefinedEntry#account_id}.

---

##### `entryId`<sup>Optional</sup> <a name="entryId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfig.property.entryId"></a>

```typescript
public readonly entryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_dlp_predefined_entry#entry_id DataCloudflareZeroTrustDlpPredefinedEntry#entry_id}.

---

### DataCloudflareZeroTrustDlpPredefinedEntryPattern <a name="DataCloudflareZeroTrustDlpPredefinedEntryPattern" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPattern.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpPredefinedEntry } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDlpPredefinedEntryPattern: dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPattern = { ... }
```


### DataCloudflareZeroTrustDlpPredefinedEntryVariant <a name="DataCloudflareZeroTrustDlpPredefinedEntryVariant" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariant.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpPredefinedEntry } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustDlpPredefinedEntryVariant: dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariant = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference <a name="DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpPredefinedEntry } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.aiContextAvailable">aiContextAvailable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.available">available</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidence">DataCloudflareZeroTrustDlpPredefinedEntryConfidence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aiContextAvailable`<sup>Required</sup> <a name="aiContextAvailable" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.aiContextAvailable"></a>

```typescript
public readonly aiContextAvailable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `available`<sup>Required</sup> <a name="available" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.available"></a>

```typescript
public readonly available: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDlpPredefinedEntryConfidence;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryConfidence">DataCloudflareZeroTrustDlpPredefinedEntryConfidence</a>

---


### DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference <a name="DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpPredefinedEntry } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.property.validation">validation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPattern">DataCloudflareZeroTrustDlpPredefinedEntryPattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.property.validation"></a>

```typescript
public readonly validation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPatternOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDlpPredefinedEntryPattern;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryPattern">DataCloudflareZeroTrustDlpPredefinedEntryPattern</a>

---


### DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference <a name="DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpPredefinedEntry } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.property.topicType">topicType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariant">DataCloudflareZeroTrustDlpPredefinedEntryVariant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `topicType`<sup>Required</sup> <a name="topicType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.property.topicType"></a>

```typescript
public readonly topicType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariantOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDlpPredefinedEntryVariant;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedEntry.DataCloudflareZeroTrustDlpPredefinedEntryVariant">DataCloudflareZeroTrustDlpPredefinedEntryVariant</a>

---



