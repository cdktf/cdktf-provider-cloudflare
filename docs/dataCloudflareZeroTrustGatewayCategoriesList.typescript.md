# `dataCloudflareZeroTrustGatewayCategoriesList` Submodule <a name="`dataCloudflareZeroTrustGatewayCategoriesList` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustGatewayCategoriesList <a name="DataCloudflareZeroTrustGatewayCategoriesList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_gateway_categories_list cloudflare_zero_trust_gateway_categories_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustGatewayCategoriesList } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList(scope: Construct, id: string, config: DataCloudflareZeroTrustGatewayCategoriesListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListConfig">DataCloudflareZeroTrustGatewayCategoriesListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListConfig">DataCloudflareZeroTrustGatewayCategoriesListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustGatewayCategoriesList resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustGatewayCategoriesList } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustGatewayCategoriesList } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustGatewayCategoriesList } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustGatewayCategoriesList } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustGatewayCategoriesList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustGatewayCategoriesList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustGatewayCategoriesList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_gateway_categories_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustGatewayCategoriesList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList">DataCloudflareZeroTrustGatewayCategoriesListResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.result"></a>

```typescript
public readonly result: DataCloudflareZeroTrustGatewayCategoriesListResultList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList">DataCloudflareZeroTrustGatewayCategoriesListResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustGatewayCategoriesListConfig <a name="DataCloudflareZeroTrustGatewayCategoriesListConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustGatewayCategoriesList } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustGatewayCategoriesListConfig: dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListConfig.property.accountId">accountId</a></code> | <code>string</code> | Provide the identifier string. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Provide the identifier string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_gateway_categories_list#account_id DataCloudflareZeroTrustGatewayCategoriesList#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_gateway_categories_list#max_items DataCloudflareZeroTrustGatewayCategoriesList#max_items}

---

### DataCloudflareZeroTrustGatewayCategoriesListResult <a name="DataCloudflareZeroTrustGatewayCategoriesListResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResult.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustGatewayCategoriesList } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustGatewayCategoriesListResult: dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResult = { ... }
```


### DataCloudflareZeroTrustGatewayCategoriesListResultSubcategories <a name="DataCloudflareZeroTrustGatewayCategoriesListResultSubcategories" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategories.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustGatewayCategoriesList } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustGatewayCategoriesListResultSubcategories: dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategories = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustGatewayCategoriesListResultList <a name="DataCloudflareZeroTrustGatewayCategoriesListResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustGatewayCategoriesList } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference <a name="DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustGatewayCategoriesList } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.property.beta">beta</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.property.class">class</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.property.subcategories">subcategories</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList">DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResult">DataCloudflareZeroTrustGatewayCategoriesListResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `beta`<sup>Required</sup> <a name="beta" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.property.beta"></a>

```typescript
public readonly beta: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `class`<sup>Required</sup> <a name="class" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.property.class"></a>

```typescript
public readonly class: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `subcategories`<sup>Required</sup> <a name="subcategories" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.property.subcategories"></a>

```typescript
public readonly subcategories: DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList">DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustGatewayCategoriesListResult;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResult">DataCloudflareZeroTrustGatewayCategoriesListResult</a>

---


### DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList <a name="DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustGatewayCategoriesList } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference <a name="DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustGatewayCategoriesList } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.property.beta">beta</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.property.class">class</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategories">DataCloudflareZeroTrustGatewayCategoriesListResultSubcategories</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `beta`<sup>Required</sup> <a name="beta" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.property.beta"></a>

```typescript
public readonly beta: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `class`<sup>Required</sup> <a name="class" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.property.class"></a>

```typescript
public readonly class: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategoriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustGatewayCategoriesListResultSubcategories;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustGatewayCategoriesList.DataCloudflareZeroTrustGatewayCategoriesListResultSubcategories">DataCloudflareZeroTrustGatewayCategoriesListResultSubcategories</a>

---



