# `dataCloudflareOrganizations` Submodule <a name="`dataCloudflareOrganizations` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareOrganizations <a name="DataCloudflareOrganizations" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/organizations cloudflare_organizations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer"></a>

```typescript
import { dataCloudflareOrganizations } from '@cdktf/provider-cloudflare'

new dataCloudflareOrganizations.DataCloudflareOrganizations(scope: Construct, id: string, config?: DataCloudflareOrganizationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig">DataCloudflareOrganizationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig">DataCloudflareOrganizationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putContaining">putContaining</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putName">putName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putParent">putParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetContaining">resetContaining</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetPageToken">resetPageToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetParent">resetParent</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putContaining` <a name="putContaining" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putContaining"></a>

```typescript
public putContaining(value: DataCloudflareOrganizationsContaining): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putContaining.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining">DataCloudflareOrganizationsContaining</a>

---

##### `putName` <a name="putName" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putName"></a>

```typescript
public putName(value: DataCloudflareOrganizationsName): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName">DataCloudflareOrganizationsName</a>

---

##### `putParent` <a name="putParent" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putParent"></a>

```typescript
public putParent(value: DataCloudflareOrganizationsParent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.putParent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent">DataCloudflareOrganizationsParent</a>

---

##### `resetContaining` <a name="resetContaining" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetContaining"></a>

```typescript
public resetContaining(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPageSize` <a name="resetPageSize" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetPageToken` <a name="resetPageToken" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetPageToken"></a>

```typescript
public resetPageToken(): void
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.resetParent"></a>

```typescript
public resetParent(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareOrganizations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.isConstruct"></a>

```typescript
import { dataCloudflareOrganizations } from '@cdktf/provider-cloudflare'

dataCloudflareOrganizations.DataCloudflareOrganizations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.isTerraformElement"></a>

```typescript
import { dataCloudflareOrganizations } from '@cdktf/provider-cloudflare'

dataCloudflareOrganizations.DataCloudflareOrganizations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.isTerraformDataSource"></a>

```typescript
import { dataCloudflareOrganizations } from '@cdktf/provider-cloudflare'

dataCloudflareOrganizations.DataCloudflareOrganizations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.generateConfigForImport"></a>

```typescript
import { dataCloudflareOrganizations } from '@cdktf/provider-cloudflare'

dataCloudflareOrganizations.DataCloudflareOrganizations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareOrganizations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareOrganizations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareOrganizations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/organizations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareOrganizations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.containing">containing</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference">DataCloudflareOrganizationsContainingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.name">name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference">DataCloudflareOrganizationsNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.parent">parent</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference">DataCloudflareOrganizationsParentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList">DataCloudflareOrganizationsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.containingInput">containingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining">DataCloudflareOrganizationsContaining</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.idInput">idInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.nameInput">nameInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName">DataCloudflareOrganizationsName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.pageTokenInput">pageTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.parentInput">parentInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent">DataCloudflareOrganizationsParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.id">id</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.pageToken">pageToken</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `containing`<sup>Required</sup> <a name="containing" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.containing"></a>

```typescript
public readonly containing: DataCloudflareOrganizationsContainingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference">DataCloudflareOrganizationsContainingOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.name"></a>

```typescript
public readonly name: DataCloudflareOrganizationsNameOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference">DataCloudflareOrganizationsNameOutputReference</a>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.parent"></a>

```typescript
public readonly parent: DataCloudflareOrganizationsParentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference">DataCloudflareOrganizationsParentOutputReference</a>

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.result"></a>

```typescript
public readonly result: DataCloudflareOrganizationsResultList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList">DataCloudflareOrganizationsResultList</a>

---

##### `containingInput`<sup>Optional</sup> <a name="containingInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.containingInput"></a>

```typescript
public readonly containingInput: IResolvable | DataCloudflareOrganizationsContaining;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining">DataCloudflareOrganizationsContaining</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.idInput"></a>

```typescript
public readonly idInput: string[];
```

- *Type:* string[]

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.nameInput"></a>

```typescript
public readonly nameInput: IResolvable | DataCloudflareOrganizationsName;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName">DataCloudflareOrganizationsName</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `pageTokenInput`<sup>Optional</sup> <a name="pageTokenInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.pageTokenInput"></a>

```typescript
public readonly pageTokenInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.parentInput"></a>

```typescript
public readonly parentInput: IResolvable | DataCloudflareOrganizationsParent;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent">DataCloudflareOrganizationsParent</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.id"></a>

```typescript
public readonly id: string[];
```

- *Type:* string[]

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

##### `pageToken`<sup>Required</sup> <a name="pageToken" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.pageToken"></a>

```typescript
public readonly pageToken: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareOrganizationsConfig <a name="DataCloudflareOrganizationsConfig" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.Initializer"></a>

```typescript
import { dataCloudflareOrganizations } from '@cdktf/provider-cloudflare'

const dataCloudflareOrganizationsConfig: dataCloudflareOrganizations.DataCloudflareOrganizationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.containing">containing</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining">DataCloudflareOrganizationsContaining</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/organizations#containing DataCloudflareOrganizations#containing}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.id">id</a></code> | <code>string[]</code> | Only return organizations with the specified IDs (ex. id=foo&id=bar). Send multiple elements by repeating the query value. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.name">name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName">DataCloudflareOrganizationsName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/organizations#name DataCloudflareOrganizations#name}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.pageSize">pageSize</a></code> | <code>number</code> | The amount of items to return. Defaults to 10. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.pageToken">pageToken</a></code> | <code>string</code> | An opaque token returned from the last list response that when provided will retrieve the next page. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.parent">parent</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent">DataCloudflareOrganizationsParent</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/organizations#parent DataCloudflareOrganizations#parent}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `containing`<sup>Optional</sup> <a name="containing" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.containing"></a>

```typescript
public readonly containing: DataCloudflareOrganizationsContaining;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining">DataCloudflareOrganizationsContaining</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/organizations#containing DataCloudflareOrganizations#containing}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.id"></a>

```typescript
public readonly id: string[];
```

- *Type:* string[]

Only return organizations with the specified IDs (ex. id=foo&id=bar). Send multiple elements by repeating the query value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/organizations#id DataCloudflareOrganizations#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/organizations#max_items DataCloudflareOrganizations#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.name"></a>

```typescript
public readonly name: DataCloudflareOrganizationsName;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName">DataCloudflareOrganizationsName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/organizations#name DataCloudflareOrganizations#name}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

The amount of items to return. Defaults to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/organizations#page_size DataCloudflareOrganizations#page_size}

---

##### `pageToken`<sup>Optional</sup> <a name="pageToken" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.pageToken"></a>

```typescript
public readonly pageToken: string;
```

- *Type:* string

An opaque token returned from the last list response that when provided will retrieve the next page.

Parameters used to filter the retrieved list must remain in subsequent
requests with a page token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/organizations#page_token DataCloudflareOrganizations#page_token}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsConfig.property.parent"></a>

```typescript
public readonly parent: DataCloudflareOrganizationsParent;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent">DataCloudflareOrganizationsParent</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/organizations#parent DataCloudflareOrganizations#parent}.

---

### DataCloudflareOrganizationsContaining <a name="DataCloudflareOrganizationsContaining" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining.Initializer"></a>

```typescript
import { dataCloudflareOrganizations } from '@cdktf/provider-cloudflare'

const dataCloudflareOrganizationsContaining: dataCloudflareOrganizations.DataCloudflareOrganizationsContaining = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining.property.account">account</a></code> | <code>string</code> | Filter the list of organizations to the ones that contain this particular account. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining.property.organization">organization</a></code> | <code>string</code> | Filter the list of organizations to the ones that contain this particular organization. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining.property.user">user</a></code> | <code>string</code> | Filter the list of organizations to the ones that contain this particular user. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

Filter the list of organizations to the ones that contain this particular account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/organizations#account DataCloudflareOrganizations#account}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Filter the list of organizations to the ones that contain this particular organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/organizations#organization DataCloudflareOrganizations#organization}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

Filter the list of organizations to the ones that contain this particular user.

IMPORTANT: Just because an organization "contains" a user is not a
representation of any authorization or privilege to manage any resources
therein. An organization "containing" a user simply means the user is managed by
that organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/organizations#user DataCloudflareOrganizations#user}

---

### DataCloudflareOrganizationsName <a name="DataCloudflareOrganizationsName" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName.Initializer"></a>

```typescript
import { dataCloudflareOrganizations } from '@cdktf/provider-cloudflare'

const dataCloudflareOrganizationsName: dataCloudflareOrganizations.DataCloudflareOrganizationsName = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName.property.contains">contains</a></code> | <code>string</code> | (case-insensitive) Filter the list of organizations to where the name contains a particular string. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName.property.endsWith">endsWith</a></code> | <code>string</code> | (case-insensitive) Filter the list of organizations to where the name ends with a particular string. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName.property.startsWith">startsWith</a></code> | <code>string</code> | (case-insensitive) Filter the list of organizations to where the name starts with a particular string. |

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName.property.contains"></a>

```typescript
public readonly contains: string;
```

- *Type:* string

(case-insensitive) Filter the list of organizations to where the name contains a particular string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/organizations#contains DataCloudflareOrganizations#contains}

---

##### `endsWith`<sup>Optional</sup> <a name="endsWith" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName.property.endsWith"></a>

```typescript
public readonly endsWith: string;
```

- *Type:* string

(case-insensitive) Filter the list of organizations to where the name ends with a particular string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/organizations#ends_with DataCloudflareOrganizations#ends_with}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName.property.startsWith"></a>

```typescript
public readonly startsWith: string;
```

- *Type:* string

(case-insensitive) Filter the list of organizations to where the name starts with a particular string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/organizations#starts_with DataCloudflareOrganizations#starts_with}

---

### DataCloudflareOrganizationsParent <a name="DataCloudflareOrganizationsParent" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent.Initializer"></a>

```typescript
import { dataCloudflareOrganizations } from '@cdktf/provider-cloudflare'

const dataCloudflareOrganizationsParent: dataCloudflareOrganizations.DataCloudflareOrganizationsParent = { ... }
```


### DataCloudflareOrganizationsResult <a name="DataCloudflareOrganizationsResult" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResult.Initializer"></a>

```typescript
import { dataCloudflareOrganizations } from '@cdktf/provider-cloudflare'

const dataCloudflareOrganizationsResult: dataCloudflareOrganizations.DataCloudflareOrganizationsResult = { ... }
```


### DataCloudflareOrganizationsResultMeta <a name="DataCloudflareOrganizationsResultMeta" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMeta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMeta.Initializer"></a>

```typescript
import { dataCloudflareOrganizations } from '@cdktf/provider-cloudflare'

const dataCloudflareOrganizationsResultMeta: dataCloudflareOrganizations.DataCloudflareOrganizationsResultMeta = { ... }
```


### DataCloudflareOrganizationsResultMetaFlags <a name="DataCloudflareOrganizationsResultMetaFlags" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlags.Initializer"></a>

```typescript
import { dataCloudflareOrganizations } from '@cdktf/provider-cloudflare'

const dataCloudflareOrganizationsResultMetaFlags: dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlags = { ... }
```


### DataCloudflareOrganizationsResultParent <a name="DataCloudflareOrganizationsResultParent" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParent.Initializer"></a>

```typescript
import { dataCloudflareOrganizations } from '@cdktf/provider-cloudflare'

const dataCloudflareOrganizationsResultParent: dataCloudflareOrganizations.DataCloudflareOrganizationsResultParent = { ... }
```


### DataCloudflareOrganizationsResultProfile <a name="DataCloudflareOrganizationsResultProfile" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfile.Initializer"></a>

```typescript
import { dataCloudflareOrganizations } from '@cdktf/provider-cloudflare'

const dataCloudflareOrganizationsResultProfile: dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfile = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareOrganizationsContainingOutputReference <a name="DataCloudflareOrganizationsContainingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.Initializer"></a>

```typescript
import { dataCloudflareOrganizations } from '@cdktf/provider-cloudflare'

new dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccount` <a name="resetAccount" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.resetAccount"></a>

```typescript
public resetAccount(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.resetUser"></a>

```typescript
public resetUser(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.accountInput">accountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.account">account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining">DataCloudflareOrganizationsContaining</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.accountInput"></a>

```typescript
public readonly accountInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContainingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareOrganizationsContaining;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsContaining">DataCloudflareOrganizationsContaining</a>

---


### DataCloudflareOrganizationsNameOutputReference <a name="DataCloudflareOrganizationsNameOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.Initializer"></a>

```typescript
import { dataCloudflareOrganizations } from '@cdktf/provider-cloudflare'

new dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.resetContains">resetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.resetEndsWith">resetEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.resetStartsWith">resetStartsWith</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContains` <a name="resetContains" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.resetContains"></a>

```typescript
public resetContains(): void
```

##### `resetEndsWith` <a name="resetEndsWith" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.resetEndsWith"></a>

```typescript
public resetEndsWith(): void
```

##### `resetStartsWith` <a name="resetStartsWith" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.resetStartsWith"></a>

```typescript
public resetStartsWith(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.containsInput">containsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.endsWithInput">endsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.startsWithInput">startsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.contains">contains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.endsWith">endsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.startsWith">startsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName">DataCloudflareOrganizationsName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containsInput`<sup>Optional</sup> <a name="containsInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.containsInput"></a>

```typescript
public readonly containsInput: string;
```

- *Type:* string

---

##### `endsWithInput`<sup>Optional</sup> <a name="endsWithInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.endsWithInput"></a>

```typescript
public readonly endsWithInput: string;
```

- *Type:* string

---

##### `startsWithInput`<sup>Optional</sup> <a name="startsWithInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.startsWithInput"></a>

```typescript
public readonly startsWithInput: string;
```

- *Type:* string

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.contains"></a>

```typescript
public readonly contains: string;
```

- *Type:* string

---

##### `endsWith`<sup>Required</sup> <a name="endsWith" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.endsWith"></a>

```typescript
public readonly endsWith: string;
```

- *Type:* string

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.startsWith"></a>

```typescript
public readonly startsWith: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareOrganizationsName;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsName">DataCloudflareOrganizationsName</a>

---


### DataCloudflareOrganizationsParentOutputReference <a name="DataCloudflareOrganizationsParentOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.Initializer"></a>

```typescript
import { dataCloudflareOrganizations } from '@cdktf/provider-cloudflare'

new dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent">DataCloudflareOrganizationsParent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareOrganizationsParent;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsParent">DataCloudflareOrganizationsParent</a>

---


### DataCloudflareOrganizationsResultList <a name="DataCloudflareOrganizationsResultList" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.Initializer"></a>

```typescript
import { dataCloudflareOrganizations } from '@cdktf/provider-cloudflare'

new dataCloudflareOrganizations.DataCloudflareOrganizationsResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.get"></a>

```typescript
public get(index: number): DataCloudflareOrganizationsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareOrganizationsResultMetaFlagsOutputReference <a name="DataCloudflareOrganizationsResultMetaFlagsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareOrganizations } from '@cdktf/provider-cloudflare'

new dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.accountCreation">accountCreation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.accountDeletion">accountDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.accountMigration">accountMigration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.accountMobility">accountMobility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.subOrgCreation">subOrgCreation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlags">DataCloudflareOrganizationsResultMetaFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountCreation`<sup>Required</sup> <a name="accountCreation" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.accountCreation"></a>

```typescript
public readonly accountCreation: string;
```

- *Type:* string

---

##### `accountDeletion`<sup>Required</sup> <a name="accountDeletion" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.accountDeletion"></a>

```typescript
public readonly accountDeletion: string;
```

- *Type:* string

---

##### `accountMigration`<sup>Required</sup> <a name="accountMigration" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.accountMigration"></a>

```typescript
public readonly accountMigration: string;
```

- *Type:* string

---

##### `accountMobility`<sup>Required</sup> <a name="accountMobility" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.accountMobility"></a>

```typescript
public readonly accountMobility: string;
```

- *Type:* string

---

##### `subOrgCreation`<sup>Required</sup> <a name="subOrgCreation" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.subOrgCreation"></a>

```typescript
public readonly subOrgCreation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareOrganizationsResultMetaFlags;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlags">DataCloudflareOrganizationsResultMetaFlags</a>

---


### DataCloudflareOrganizationsResultMetaOutputReference <a name="DataCloudflareOrganizationsResultMetaOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.Initializer"></a>

```typescript
import { dataCloudflareOrganizations } from '@cdktf/provider-cloudflare'

new dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.flags">flags</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference">DataCloudflareOrganizationsResultMetaFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.managedBy">managedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMeta">DataCloudflareOrganizationsResultMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flags`<sup>Required</sup> <a name="flags" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.flags"></a>

```typescript
public readonly flags: DataCloudflareOrganizationsResultMetaFlagsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaFlagsOutputReference">DataCloudflareOrganizationsResultMetaFlagsOutputReference</a>

---

##### `managedBy`<sup>Required</sup> <a name="managedBy" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.managedBy"></a>

```typescript
public readonly managedBy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareOrganizationsResultMeta;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMeta">DataCloudflareOrganizationsResultMeta</a>

---


### DataCloudflareOrganizationsResultOutputReference <a name="DataCloudflareOrganizationsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareOrganizations } from '@cdktf/provider-cloudflare'

new dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.meta">meta</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference">DataCloudflareOrganizationsResultMetaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.parent">parent</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference">DataCloudflareOrganizationsResultParentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.profile">profile</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference">DataCloudflareOrganizationsResultProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResult">DataCloudflareOrganizationsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.meta"></a>

```typescript
public readonly meta: DataCloudflareOrganizationsResultMetaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultMetaOutputReference">DataCloudflareOrganizationsResultMetaOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.parent"></a>

```typescript
public readonly parent: DataCloudflareOrganizationsResultParentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference">DataCloudflareOrganizationsResultParentOutputReference</a>

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.profile"></a>

```typescript
public readonly profile: DataCloudflareOrganizationsResultProfileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference">DataCloudflareOrganizationsResultProfileOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareOrganizationsResult;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResult">DataCloudflareOrganizationsResult</a>

---


### DataCloudflareOrganizationsResultParentOutputReference <a name="DataCloudflareOrganizationsResultParentOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.Initializer"></a>

```typescript
import { dataCloudflareOrganizations } from '@cdktf/provider-cloudflare'

new dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParent">DataCloudflareOrganizationsResultParent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareOrganizationsResultParent;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultParent">DataCloudflareOrganizationsResultParent</a>

---


### DataCloudflareOrganizationsResultProfileOutputReference <a name="DataCloudflareOrganizationsResultProfileOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.Initializer"></a>

```typescript
import { dataCloudflareOrganizations } from '@cdktf/provider-cloudflare'

new dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.businessAddress">businessAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.businessEmail">businessEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.businessName">businessName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.businessPhone">businessPhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.externalMetadata">externalMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfile">DataCloudflareOrganizationsResultProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `businessAddress`<sup>Required</sup> <a name="businessAddress" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.businessAddress"></a>

```typescript
public readonly businessAddress: string;
```

- *Type:* string

---

##### `businessEmail`<sup>Required</sup> <a name="businessEmail" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.businessEmail"></a>

```typescript
public readonly businessEmail: string;
```

- *Type:* string

---

##### `businessName`<sup>Required</sup> <a name="businessName" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.businessName"></a>

```typescript
public readonly businessName: string;
```

- *Type:* string

---

##### `businessPhone`<sup>Required</sup> <a name="businessPhone" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.businessPhone"></a>

```typescript
public readonly businessPhone: string;
```

- *Type:* string

---

##### `externalMetadata`<sup>Required</sup> <a name="externalMetadata" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.externalMetadata"></a>

```typescript
public readonly externalMetadata: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareOrganizationsResultProfile;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganizations.DataCloudflareOrganizationsResultProfile">DataCloudflareOrganizationsResultProfile</a>

---



