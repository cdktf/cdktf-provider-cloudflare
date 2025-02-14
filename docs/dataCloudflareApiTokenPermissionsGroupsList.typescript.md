# `dataCloudflareApiTokenPermissionsGroupsList` Submodule <a name="`dataCloudflareApiTokenPermissionsGroupsList` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareApiTokenPermissionsGroupsList <a name="DataCloudflareApiTokenPermissionsGroupsList" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_token_permissions_groups_list cloudflare_api_token_permissions_groups_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.Initializer"></a>

```typescript
import { dataCloudflareApiTokenPermissionsGroupsList } from '@cdktf/provider-cloudflare'

new dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList(scope: Construct, id: string, config: DataCloudflareApiTokenPermissionsGroupsListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig">DataCloudflareApiTokenPermissionsGroupsListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig">DataCloudflareApiTokenPermissionsGroupsListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareApiTokenPermissionsGroupsList resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.isConstruct"></a>

```typescript
import { dataCloudflareApiTokenPermissionsGroupsList } from '@cdktf/provider-cloudflare'

dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.isTerraformElement"></a>

```typescript
import { dataCloudflareApiTokenPermissionsGroupsList } from '@cdktf/provider-cloudflare'

dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.isTerraformDataSource"></a>

```typescript
import { dataCloudflareApiTokenPermissionsGroupsList } from '@cdktf/provider-cloudflare'

dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.generateConfigForImport"></a>

```typescript
import { dataCloudflareApiTokenPermissionsGroupsList } from '@cdktf/provider-cloudflare'

dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareApiTokenPermissionsGroupsList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareApiTokenPermissionsGroupsList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareApiTokenPermissionsGroupsList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_token_permissions_groups_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareApiTokenPermissionsGroupsList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList">DataCloudflareApiTokenPermissionsGroupsListResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.result"></a>

```typescript
public readonly result: DataCloudflareApiTokenPermissionsGroupsListResultList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList">DataCloudflareApiTokenPermissionsGroupsListResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareApiTokenPermissionsGroupsListConfig <a name="DataCloudflareApiTokenPermissionsGroupsListConfig" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.Initializer"></a>

```typescript
import { dataCloudflareApiTokenPermissionsGroupsList } from '@cdktf/provider-cloudflare'

const dataCloudflareApiTokenPermissionsGroupsListConfig: dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.accountId">accountId</a></code> | <code>string</code> | Account identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_token_permissions_groups_list#account_id DataCloudflareApiTokenPermissionsGroupsList#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/api_token_permissions_groups_list#max_items DataCloudflareApiTokenPermissionsGroupsList#max_items}

---

### DataCloudflareApiTokenPermissionsGroupsListResult <a name="DataCloudflareApiTokenPermissionsGroupsListResult" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResult.Initializer"></a>

```typescript
import { dataCloudflareApiTokenPermissionsGroupsList } from '@cdktf/provider-cloudflare'

const dataCloudflareApiTokenPermissionsGroupsListResult: dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareApiTokenPermissionsGroupsListResultList <a name="DataCloudflareApiTokenPermissionsGroupsListResultList" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.Initializer"></a>

```typescript
import { dataCloudflareApiTokenPermissionsGroupsList } from '@cdktf/provider-cloudflare'

new dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.get"></a>

```typescript
public get(index: number): DataCloudflareApiTokenPermissionsGroupsListResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareApiTokenPermissionsGroupsListResultOutputReference <a name="DataCloudflareApiTokenPermissionsGroupsListResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareApiTokenPermissionsGroupsList } from '@cdktf/provider-cloudflare'

new dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResult">DataCloudflareApiTokenPermissionsGroupsListResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareApiTokenPermissionsGroupsListResult;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiTokenPermissionsGroupsList.DataCloudflareApiTokenPermissionsGroupsListResult">DataCloudflareApiTokenPermissionsGroupsListResult</a>

---



