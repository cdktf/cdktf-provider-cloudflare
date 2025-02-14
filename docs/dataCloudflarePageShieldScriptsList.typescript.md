# `dataCloudflarePageShieldScriptsList` Submodule <a name="`dataCloudflarePageShieldScriptsList` Submodule" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflarePageShieldScriptsList <a name="DataCloudflarePageShieldScriptsList" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_scripts_list cloudflare_page_shield_scripts_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer"></a>

```typescript
import { dataCloudflarePageShieldScriptsList } from '@cdktf/provider-cloudflare'

new dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList(scope: Construct, id: string, config: DataCloudflarePageShieldScriptsListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig">DataCloudflarePageShieldScriptsListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig">DataCloudflarePageShieldScriptsListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetExcludeCdnCgi">resetExcludeCdnCgi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetExcludeDuplicates">resetExcludeDuplicates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetExcludeUrls">resetExcludeUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetExport">resetExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetHosts">resetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetOrderBy">resetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetPage">resetPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetPageUrl">resetPageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetPerPage">resetPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetPrioritizeMalicious">resetPrioritizeMalicious</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetUrls">resetUrls</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetExcludeCdnCgi` <a name="resetExcludeCdnCgi" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetExcludeCdnCgi"></a>

```typescript
public resetExcludeCdnCgi(): void
```

##### `resetExcludeDuplicates` <a name="resetExcludeDuplicates" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetExcludeDuplicates"></a>

```typescript
public resetExcludeDuplicates(): void
```

##### `resetExcludeUrls` <a name="resetExcludeUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetExcludeUrls"></a>

```typescript
public resetExcludeUrls(): void
```

##### `resetExport` <a name="resetExport" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetExport"></a>

```typescript
public resetExport(): void
```

##### `resetHosts` <a name="resetHosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetHosts"></a>

```typescript
public resetHosts(): void
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetOrderBy` <a name="resetOrderBy" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetOrderBy"></a>

```typescript
public resetOrderBy(): void
```

##### `resetPage` <a name="resetPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetPage"></a>

```typescript
public resetPage(): void
```

##### `resetPageUrl` <a name="resetPageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetPageUrl"></a>

```typescript
public resetPageUrl(): void
```

##### `resetPerPage` <a name="resetPerPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetPerPage"></a>

```typescript
public resetPerPage(): void
```

##### `resetPrioritizeMalicious` <a name="resetPrioritizeMalicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetPrioritizeMalicious"></a>

```typescript
public resetPrioritizeMalicious(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetUrls` <a name="resetUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.resetUrls"></a>

```typescript
public resetUrls(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflarePageShieldScriptsList resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isConstruct"></a>

```typescript
import { dataCloudflarePageShieldScriptsList } from '@cdktf/provider-cloudflare'

dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isTerraformElement"></a>

```typescript
import { dataCloudflarePageShieldScriptsList } from '@cdktf/provider-cloudflare'

dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isTerraformDataSource"></a>

```typescript
import { dataCloudflarePageShieldScriptsList } from '@cdktf/provider-cloudflare'

dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.generateConfigForImport"></a>

```typescript
import { dataCloudflarePageShieldScriptsList } from '@cdktf/provider-cloudflare'

dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflarePageShieldScriptsList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflarePageShieldScriptsList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflarePageShieldScriptsList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_scripts_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflarePageShieldScriptsList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList">DataCloudflarePageShieldScriptsListResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeCdnCgiInput">excludeCdnCgiInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeDuplicatesInput">excludeDuplicatesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeUrlsInput">excludeUrlsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.exportInput">exportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.hostsInput">hostsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.orderByInput">orderByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.pageInput">pageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.pageUrlInput">pageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.perPageInput">perPageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.prioritizeMaliciousInput">prioritizeMaliciousInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.urlsInput">urlsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeCdnCgi">excludeCdnCgi</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeDuplicates">excludeDuplicates</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeUrls">excludeUrls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.export">export</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.hosts">hosts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.orderBy">orderBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.page">page</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.pageUrl">pageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.perPage">perPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.prioritizeMalicious">prioritizeMalicious</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.urls">urls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.result"></a>

```typescript
public readonly result: DataCloudflarePageShieldScriptsListResultList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList">DataCloudflarePageShieldScriptsListResultList</a>

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `excludeCdnCgiInput`<sup>Optional</sup> <a name="excludeCdnCgiInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeCdnCgiInput"></a>

```typescript
public readonly excludeCdnCgiInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludeDuplicatesInput`<sup>Optional</sup> <a name="excludeDuplicatesInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeDuplicatesInput"></a>

```typescript
public readonly excludeDuplicatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludeUrlsInput`<sup>Optional</sup> <a name="excludeUrlsInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeUrlsInput"></a>

```typescript
public readonly excludeUrlsInput: string;
```

- *Type:* string

---

##### `exportInput`<sup>Optional</sup> <a name="exportInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.exportInput"></a>

```typescript
public readonly exportInput: string;
```

- *Type:* string

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.hostsInput"></a>

```typescript
public readonly hostsInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `orderByInput`<sup>Optional</sup> <a name="orderByInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.orderByInput"></a>

```typescript
public readonly orderByInput: string;
```

- *Type:* string

---

##### `pageInput`<sup>Optional</sup> <a name="pageInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.pageInput"></a>

```typescript
public readonly pageInput: string;
```

- *Type:* string

---

##### `pageUrlInput`<sup>Optional</sup> <a name="pageUrlInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.pageUrlInput"></a>

```typescript
public readonly pageUrlInput: string;
```

- *Type:* string

---

##### `perPageInput`<sup>Optional</sup> <a name="perPageInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.perPageInput"></a>

```typescript
public readonly perPageInput: number;
```

- *Type:* number

---

##### `prioritizeMaliciousInput`<sup>Optional</sup> <a name="prioritizeMaliciousInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.prioritizeMaliciousInput"></a>

```typescript
public readonly prioritizeMaliciousInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `urlsInput`<sup>Optional</sup> <a name="urlsInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.urlsInput"></a>

```typescript
public readonly urlsInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `excludeCdnCgi`<sup>Required</sup> <a name="excludeCdnCgi" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeCdnCgi"></a>

```typescript
public readonly excludeCdnCgi: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludeDuplicates`<sup>Required</sup> <a name="excludeDuplicates" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeDuplicates"></a>

```typescript
public readonly excludeDuplicates: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludeUrls`<sup>Required</sup> <a name="excludeUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.excludeUrls"></a>

```typescript
public readonly excludeUrls: string;
```

- *Type:* string

---

##### `export`<sup>Required</sup> <a name="export" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.export"></a>

```typescript
public readonly export: string;
```

- *Type:* string

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.hosts"></a>

```typescript
public readonly hosts: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `orderBy`<sup>Required</sup> <a name="orderBy" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.orderBy"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* string

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.page"></a>

```typescript
public readonly page: string;
```

- *Type:* string

---

##### `pageUrl`<sup>Required</sup> <a name="pageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.pageUrl"></a>

```typescript
public readonly pageUrl: string;
```

- *Type:* string

---

##### `perPage`<sup>Required</sup> <a name="perPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.perPage"></a>

```typescript
public readonly perPage: number;
```

- *Type:* number

---

##### `prioritizeMalicious`<sup>Required</sup> <a name="prioritizeMalicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.prioritizeMalicious"></a>

```typescript
public readonly prioritizeMalicious: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.urls"></a>

```typescript
public readonly urls: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflarePageShieldScriptsListConfig <a name="DataCloudflarePageShieldScriptsListConfig" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.Initializer"></a>

```typescript
import { dataCloudflarePageShieldScriptsList } from '@cdktf/provider-cloudflare'

const dataCloudflarePageShieldScriptsListConfig: dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.direction">direction</a></code> | <code>string</code> | The direction used to sort returned scripts. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.excludeCdnCgi">excludeCdnCgi</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, excludes scripts seen in a `/cdn-cgi` path from the returned scripts. The default value is true. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.excludeDuplicates">excludeDuplicates</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, excludes duplicate scripts. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.excludeUrls">excludeUrls</a></code> | <code>string</code> | Excludes scripts whose URL contains one of the URL-encoded URLs separated by commas. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.export">export</a></code> | <code>string</code> | Export the list of scripts as a file. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.hosts">hosts</a></code> | <code>string</code> | Includes scripts that match one or more URL-encoded hostnames separated by commas. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.orderBy">orderBy</a></code> | <code>string</code> | The field used to sort returned scripts. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.page">page</a></code> | <code>string</code> | The current page number of the paginated results. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.pageUrl">pageUrl</a></code> | <code>string</code> | Includes scripts that match one or more page URLs (separated by commas) where they were last seen. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.perPage">perPage</a></code> | <code>number</code> | The number of results per page. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.prioritizeMalicious">prioritizeMalicious</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, malicious scripts appear first in the returned scripts. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.status">status</a></code> | <code>string</code> | Filters the returned scripts using a comma-separated list of scripts statuses. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.urls">urls</a></code> | <code>string</code> | Includes scripts whose URL contain one or more URL-encoded URLs separated by commas. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_scripts_list#zone_id DataCloudflarePageShieldScriptsList#zone_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

The direction used to sort returned scripts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_scripts_list#direction DataCloudflarePageShieldScriptsList#direction}

---

##### `excludeCdnCgi`<sup>Optional</sup> <a name="excludeCdnCgi" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.excludeCdnCgi"></a>

```typescript
public readonly excludeCdnCgi: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, excludes scripts seen in a `/cdn-cgi` path from the returned scripts. The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_scripts_list#exclude_cdn_cgi DataCloudflarePageShieldScriptsList#exclude_cdn_cgi}

---

##### `excludeDuplicates`<sup>Optional</sup> <a name="excludeDuplicates" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.excludeDuplicates"></a>

```typescript
public readonly excludeDuplicates: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, excludes duplicate scripts.

We consider a script duplicate of another if their javascript
content matches and they share the same url host and zone hostname. In such case, we return the most
recent script for the URL host and zone hostname combination.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_scripts_list#exclude_duplicates DataCloudflarePageShieldScriptsList#exclude_duplicates}

---

##### `excludeUrls`<sup>Optional</sup> <a name="excludeUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.excludeUrls"></a>

```typescript
public readonly excludeUrls: string;
```

- *Type:* string

Excludes scripts whose URL contains one of the URL-encoded URLs separated by commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_scripts_list#exclude_urls DataCloudflarePageShieldScriptsList#exclude_urls}

---

##### `export`<sup>Optional</sup> <a name="export" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.export"></a>

```typescript
public readonly export: string;
```

- *Type:* string

Export the list of scripts as a file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_scripts_list#export DataCloudflarePageShieldScriptsList#export}

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.hosts"></a>

```typescript
public readonly hosts: string;
```

- *Type:* string

Includes scripts that match one or more URL-encoded hostnames separated by commas.

Wildcards are supported at the start and end of each hostname to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_scripts_list#hosts DataCloudflarePageShieldScriptsList#hosts}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_scripts_list#max_items DataCloudflarePageShieldScriptsList#max_items}

---

##### `orderBy`<sup>Optional</sup> <a name="orderBy" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.orderBy"></a>

```typescript
public readonly orderBy: string;
```

- *Type:* string

The field used to sort returned scripts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_scripts_list#order_by DataCloudflarePageShieldScriptsList#order_by}

---

##### `page`<sup>Optional</sup> <a name="page" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.page"></a>

```typescript
public readonly page: string;
```

- *Type:* string

The current page number of the paginated results.

We additionally support a special value "all". When "all" is used, the API will return all the scripts
with the applied filters in a single page. This feature is best-effort and it may only work for zones with 
a low number of scripts


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_scripts_list#page DataCloudflarePageShieldScriptsList#page}

---

##### `pageUrl`<sup>Optional</sup> <a name="pageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.pageUrl"></a>

```typescript
public readonly pageUrl: string;
```

- *Type:* string

Includes scripts that match one or more page URLs (separated by commas) where they were last seen.

Wildcards are supported at the start and end of each page URL to support starts with, ends with
and contains. If no wildcards are used, results will be filtered by exact match


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_scripts_list#page_url DataCloudflarePageShieldScriptsList#page_url}

---

##### `perPage`<sup>Optional</sup> <a name="perPage" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.perPage"></a>

```typescript
public readonly perPage: number;
```

- *Type:* number

The number of results per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_scripts_list#per_page DataCloudflarePageShieldScriptsList#per_page}

---

##### `prioritizeMalicious`<sup>Optional</sup> <a name="prioritizeMalicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.prioritizeMalicious"></a>

```typescript
public readonly prioritizeMalicious: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, malicious scripts appear first in the returned scripts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_scripts_list#prioritize_malicious DataCloudflarePageShieldScriptsList#prioritize_malicious}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Filters the returned scripts using a comma-separated list of scripts statuses.

Accepted values: `active`, `infrequent`, and `inactive`. The default value is `active`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_scripts_list#status DataCloudflarePageShieldScriptsList#status}

---

##### `urls`<sup>Optional</sup> <a name="urls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListConfig.property.urls"></a>

```typescript
public readonly urls: string;
```

- *Type:* string

Includes scripts whose URL contain one or more URL-encoded URLs separated by commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/page_shield_scripts_list#urls DataCloudflarePageShieldScriptsList#urls}

---

### DataCloudflarePageShieldScriptsListResult <a name="DataCloudflarePageShieldScriptsListResult" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResult.Initializer"></a>

```typescript
import { dataCloudflarePageShieldScriptsList } from '@cdktf/provider-cloudflare'

const dataCloudflarePageShieldScriptsListResult: dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflarePageShieldScriptsListResultList <a name="DataCloudflarePageShieldScriptsListResultList" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.Initializer"></a>

```typescript
import { dataCloudflarePageShieldScriptsList } from '@cdktf/provider-cloudflare'

new dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.get"></a>

```typescript
public get(index: number): DataCloudflarePageShieldScriptsListResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflarePageShieldScriptsListResultOutputReference <a name="DataCloudflarePageShieldScriptsListResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflarePageShieldScriptsList } from '@cdktf/provider-cloudflare'

new dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.addedAt">addedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.cryptominingScore">cryptominingScore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.dataflowScore">dataflowScore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.domainReportedMalicious">domainReportedMalicious</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.fetchedAt">fetchedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.firstPageUrl">firstPageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.firstSeenAt">firstSeenAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.hash">hash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.jsIntegrityScore">jsIntegrityScore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.lastSeenAt">lastSeenAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.magecartScore">magecartScore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.maliciousDomainCategories">maliciousDomainCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.maliciousUrlCategories">maliciousUrlCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.malwareScore">malwareScore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.obfuscationScore">obfuscationScore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.pageUrls">pageUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.urlContainsCdnCgiPath">urlContainsCdnCgiPath</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.urlReportedMalicious">urlReportedMalicious</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResult">DataCloudflarePageShieldScriptsListResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addedAt`<sup>Required</sup> <a name="addedAt" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.addedAt"></a>

```typescript
public readonly addedAt: string;
```

- *Type:* string

---

##### `cryptominingScore`<sup>Required</sup> <a name="cryptominingScore" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.cryptominingScore"></a>

```typescript
public readonly cryptominingScore: number;
```

- *Type:* number

---

##### `dataflowScore`<sup>Required</sup> <a name="dataflowScore" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.dataflowScore"></a>

```typescript
public readonly dataflowScore: number;
```

- *Type:* number

---

##### `domainReportedMalicious`<sup>Required</sup> <a name="domainReportedMalicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.domainReportedMalicious"></a>

```typescript
public readonly domainReportedMalicious: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `fetchedAt`<sup>Required</sup> <a name="fetchedAt" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.fetchedAt"></a>

```typescript
public readonly fetchedAt: string;
```

- *Type:* string

---

##### `firstPageUrl`<sup>Required</sup> <a name="firstPageUrl" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.firstPageUrl"></a>

```typescript
public readonly firstPageUrl: string;
```

- *Type:* string

---

##### `firstSeenAt`<sup>Required</sup> <a name="firstSeenAt" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.firstSeenAt"></a>

```typescript
public readonly firstSeenAt: string;
```

- *Type:* string

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.hash"></a>

```typescript
public readonly hash: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jsIntegrityScore`<sup>Required</sup> <a name="jsIntegrityScore" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.jsIntegrityScore"></a>

```typescript
public readonly jsIntegrityScore: number;
```

- *Type:* number

---

##### `lastSeenAt`<sup>Required</sup> <a name="lastSeenAt" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.lastSeenAt"></a>

```typescript
public readonly lastSeenAt: string;
```

- *Type:* string

---

##### `magecartScore`<sup>Required</sup> <a name="magecartScore" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.magecartScore"></a>

```typescript
public readonly magecartScore: number;
```

- *Type:* number

---

##### `maliciousDomainCategories`<sup>Required</sup> <a name="maliciousDomainCategories" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.maliciousDomainCategories"></a>

```typescript
public readonly maliciousDomainCategories: string[];
```

- *Type:* string[]

---

##### `maliciousUrlCategories`<sup>Required</sup> <a name="maliciousUrlCategories" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.maliciousUrlCategories"></a>

```typescript
public readonly maliciousUrlCategories: string[];
```

- *Type:* string[]

---

##### `malwareScore`<sup>Required</sup> <a name="malwareScore" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.malwareScore"></a>

```typescript
public readonly malwareScore: number;
```

- *Type:* number

---

##### `obfuscationScore`<sup>Required</sup> <a name="obfuscationScore" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.obfuscationScore"></a>

```typescript
public readonly obfuscationScore: number;
```

- *Type:* number

---

##### `pageUrls`<sup>Required</sup> <a name="pageUrls" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.pageUrls"></a>

```typescript
public readonly pageUrls: string[];
```

- *Type:* string[]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `urlContainsCdnCgiPath`<sup>Required</sup> <a name="urlContainsCdnCgiPath" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.urlContainsCdnCgiPath"></a>

```typescript
public readonly urlContainsCdnCgiPath: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `urlReportedMalicious`<sup>Required</sup> <a name="urlReportedMalicious" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.urlReportedMalicious"></a>

```typescript
public readonly urlReportedMalicious: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflarePageShieldScriptsListResult;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePageShieldScriptsList.DataCloudflarePageShieldScriptsListResult">DataCloudflarePageShieldScriptsListResult</a>

---



