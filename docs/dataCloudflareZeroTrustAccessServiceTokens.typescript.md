# `dataCloudflareZeroTrustAccessServiceTokens` Submodule <a name="`dataCloudflareZeroTrustAccessServiceTokens` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustAccessServiceTokens <a name="DataCloudflareZeroTrustAccessServiceTokens" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_access_service_tokens cloudflare_zero_trust_access_service_tokens}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustAccessServiceTokens } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens(scope: Construct, id: string, config?: DataCloudflareZeroTrustAccessServiceTokensConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig">DataCloudflareZeroTrustAccessServiceTokensConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig">DataCloudflareZeroTrustAccessServiceTokensConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSearch` <a name="resetSearch" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.resetSearch"></a>

```typescript
public resetSearch(): void
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.resetZoneId"></a>

```typescript
public resetZoneId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustAccessServiceTokens resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustAccessServiceTokens } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustAccessServiceTokens } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustAccessServiceTokens } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustAccessServiceTokens } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustAccessServiceTokens resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustAccessServiceTokens to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustAccessServiceTokens that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_access_service_tokens#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustAccessServiceTokens to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList">DataCloudflareZeroTrustAccessServiceTokensResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.searchInput">searchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.search">search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.result"></a>

```typescript
public readonly result: DataCloudflareZeroTrustAccessServiceTokensResultList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList">DataCloudflareZeroTrustAccessServiceTokensResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.searchInput"></a>

```typescript
public readonly searchInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokens.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustAccessServiceTokensConfig <a name="DataCloudflareZeroTrustAccessServiceTokensConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustAccessServiceTokens } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustAccessServiceTokensConfig: dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.accountId">accountId</a></code> | <code>string</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.name">name</a></code> | <code>string</code> | The name of the service token. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.search">search</a></code> | <code>string</code> | Search for service tokens by other listed query parameters. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_access_service_tokens#account_id DataCloudflareZeroTrustAccessServiceTokens#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_access_service_tokens#max_items DataCloudflareZeroTrustAccessServiceTokens#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_access_service_tokens#name DataCloudflareZeroTrustAccessServiceTokens#name}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

Search for service tokens by other listed query parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_access_service_tokens#search DataCloudflareZeroTrustAccessServiceTokens#search}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_access_service_tokens#zone_id DataCloudflareZeroTrustAccessServiceTokens#zone_id}

---

### DataCloudflareZeroTrustAccessServiceTokensResult <a name="DataCloudflareZeroTrustAccessServiceTokensResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResult.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustAccessServiceTokens } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustAccessServiceTokensResult: dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustAccessServiceTokensResultList <a name="DataCloudflareZeroTrustAccessServiceTokensResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustAccessServiceTokens } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustAccessServiceTokensResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustAccessServiceTokensResultOutputReference <a name="DataCloudflareZeroTrustAccessServiceTokensResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustAccessServiceTokens } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResult">DataCloudflareZeroTrustAccessServiceTokensResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustAccessServiceTokensResult;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessServiceTokens.DataCloudflareZeroTrustAccessServiceTokensResult">DataCloudflareZeroTrustAccessServiceTokensResult</a>

---



