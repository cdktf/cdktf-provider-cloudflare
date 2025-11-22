# `dataCloudflareOrganization` Submodule <a name="`dataCloudflareOrganization` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareOrganization <a name="DataCloudflareOrganization" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization cloudflare_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer"></a>

```typescript
import { dataCloudflareOrganization } from '@cdktf/provider-cloudflare'

new dataCloudflareOrganization.DataCloudflareOrganization(scope: Construct, id: string, config?: DataCloudflareOrganizationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig">DataCloudflareOrganizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig">DataCloudflareOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.resetOrganizationId">resetOrganizationId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareOrganizationFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter">DataCloudflareOrganizationFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetOrganizationId` <a name="resetOrganizationId" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.resetOrganizationId"></a>

```typescript
public resetOrganizationId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareOrganization resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.isConstruct"></a>

```typescript
import { dataCloudflareOrganization } from '@cdktf/provider-cloudflare'

dataCloudflareOrganization.DataCloudflareOrganization.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.isTerraformElement"></a>

```typescript
import { dataCloudflareOrganization } from '@cdktf/provider-cloudflare'

dataCloudflareOrganization.DataCloudflareOrganization.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.isTerraformDataSource"></a>

```typescript
import { dataCloudflareOrganization } from '@cdktf/provider-cloudflare'

dataCloudflareOrganization.DataCloudflareOrganization.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.generateConfigForImport"></a>

```typescript
import { dataCloudflareOrganization } from '@cdktf/provider-cloudflare'

dataCloudflareOrganization.DataCloudflareOrganization.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareOrganization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareOrganization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference">DataCloudflareOrganizationFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.meta">meta</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference">DataCloudflareOrganizationMetaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.parent">parent</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference">DataCloudflareOrganizationParentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.profile">profile</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference">DataCloudflareOrganizationProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter">DataCloudflareOrganizationFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.organizationIdInput">organizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.filter"></a>

```typescript
public readonly filter: DataCloudflareOrganizationFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference">DataCloudflareOrganizationFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.meta"></a>

```typescript
public readonly meta: DataCloudflareOrganizationMetaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference">DataCloudflareOrganizationMetaOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.parent"></a>

```typescript
public readonly parent: DataCloudflareOrganizationParentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference">DataCloudflareOrganizationParentOutputReference</a>

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.profile"></a>

```typescript
public readonly profile: DataCloudflareOrganizationProfileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference">DataCloudflareOrganizationProfileOutputReference</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareOrganizationFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter">DataCloudflareOrganizationFilter</a>

---

##### `organizationIdInput`<sup>Optional</sup> <a name="organizationIdInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.organizationIdInput"></a>

```typescript
public readonly organizationIdInput: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganization.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareOrganizationConfig <a name="DataCloudflareOrganizationConfig" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.Initializer"></a>

```typescript
import { dataCloudflareOrganization } from '@cdktf/provider-cloudflare'

const dataCloudflareOrganizationConfig: dataCloudflareOrganization.DataCloudflareOrganizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter">DataCloudflareOrganizationFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#filter DataCloudflareOrganization#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.organizationId">organizationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#organization_id DataCloudflareOrganization#organization_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareOrganizationFilter;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter">DataCloudflareOrganizationFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#filter DataCloudflareOrganization#filter}.

---

##### `organizationId`<sup>Optional</sup> <a name="organizationId" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationConfig.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#organization_id DataCloudflareOrganization#organization_id}.

---

### DataCloudflareOrganizationFilter <a name="DataCloudflareOrganizationFilter" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.Initializer"></a>

```typescript
import { dataCloudflareOrganization } from '@cdktf/provider-cloudflare'

const dataCloudflareOrganizationFilter: dataCloudflareOrganization.DataCloudflareOrganizationFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.containing">containing</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining">DataCloudflareOrganizationFilterContaining</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#containing DataCloudflareOrganization#containing}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.id">id</a></code> | <code>string[]</code> | Only return organizations with the specified IDs (ex. id=foo&id=bar). Send multiple elements by repeating the query value. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.name">name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName">DataCloudflareOrganizationFilterName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#name DataCloudflareOrganization#name}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.pageSize">pageSize</a></code> | <code>number</code> | The amount of items to return. Defaults to 10. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.pageToken">pageToken</a></code> | <code>string</code> | An opaque token returned from the last list response that when provided will retrieve the next page. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.parent">parent</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent">DataCloudflareOrganizationFilterParent</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#parent DataCloudflareOrganization#parent}. |

---

##### `containing`<sup>Optional</sup> <a name="containing" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.containing"></a>

```typescript
public readonly containing: DataCloudflareOrganizationFilterContaining;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining">DataCloudflareOrganizationFilterContaining</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#containing DataCloudflareOrganization#containing}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.id"></a>

```typescript
public readonly id: string[];
```

- *Type:* string[]

Only return organizations with the specified IDs (ex. id=foo&id=bar). Send multiple elements by repeating the query value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#id DataCloudflareOrganization#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.name"></a>

```typescript
public readonly name: DataCloudflareOrganizationFilterName;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName">DataCloudflareOrganizationFilterName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#name DataCloudflareOrganization#name}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

The amount of items to return. Defaults to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#page_size DataCloudflareOrganization#page_size}

---

##### `pageToken`<sup>Optional</sup> <a name="pageToken" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.pageToken"></a>

```typescript
public readonly pageToken: string;
```

- *Type:* string

An opaque token returned from the last list response that when provided will retrieve the next page.

Parameters used to filter the retrieved list must remain in subsequent
requests with a page token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#page_token DataCloudflareOrganization#page_token}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter.property.parent"></a>

```typescript
public readonly parent: DataCloudflareOrganizationFilterParent;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent">DataCloudflareOrganizationFilterParent</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#parent DataCloudflareOrganization#parent}.

---

### DataCloudflareOrganizationFilterContaining <a name="DataCloudflareOrganizationFilterContaining" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining.Initializer"></a>

```typescript
import { dataCloudflareOrganization } from '@cdktf/provider-cloudflare'

const dataCloudflareOrganizationFilterContaining: dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining.property.account">account</a></code> | <code>string</code> | Filter the list of organizations to the ones that contain this particular account. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining.property.organization">organization</a></code> | <code>string</code> | Filter the list of organizations to the ones that contain this particular organization. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining.property.user">user</a></code> | <code>string</code> | Filter the list of organizations to the ones that contain this particular user. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

Filter the list of organizations to the ones that contain this particular account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#account DataCloudflareOrganization#account}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Filter the list of organizations to the ones that contain this particular organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#organization DataCloudflareOrganization#organization}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

Filter the list of organizations to the ones that contain this particular user.

IMPORTANT: Just because an organization "contains" a user is not a
representation of any authorization or privilege to manage any resources
therein. An organization "containing" a user simply means the user is managed by
that organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#user DataCloudflareOrganization#user}

---

### DataCloudflareOrganizationFilterName <a name="DataCloudflareOrganizationFilterName" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName.Initializer"></a>

```typescript
import { dataCloudflareOrganization } from '@cdktf/provider-cloudflare'

const dataCloudflareOrganizationFilterName: dataCloudflareOrganization.DataCloudflareOrganizationFilterName = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName.property.contains">contains</a></code> | <code>string</code> | (case-insensitive) Filter the list of organizations to where the name contains a particular string. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName.property.endsWith">endsWith</a></code> | <code>string</code> | (case-insensitive) Filter the list of organizations to where the name ends with a particular string. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName.property.startsWith">startsWith</a></code> | <code>string</code> | (case-insensitive) Filter the list of organizations to where the name starts with a particular string. |

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName.property.contains"></a>

```typescript
public readonly contains: string;
```

- *Type:* string

(case-insensitive) Filter the list of organizations to where the name contains a particular string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#contains DataCloudflareOrganization#contains}

---

##### `endsWith`<sup>Optional</sup> <a name="endsWith" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName.property.endsWith"></a>

```typescript
public readonly endsWith: string;
```

- *Type:* string

(case-insensitive) Filter the list of organizations to where the name ends with a particular string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#ends_with DataCloudflareOrganization#ends_with}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName.property.startsWith"></a>

```typescript
public readonly startsWith: string;
```

- *Type:* string

(case-insensitive) Filter the list of organizations to where the name starts with a particular string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#starts_with DataCloudflareOrganization#starts_with}

---

### DataCloudflareOrganizationFilterParent <a name="DataCloudflareOrganizationFilterParent" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent.Initializer"></a>

```typescript
import { dataCloudflareOrganization } from '@cdktf/provider-cloudflare'

const dataCloudflareOrganizationFilterParent: dataCloudflareOrganization.DataCloudflareOrganizationFilterParent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent.property.id">id</a></code> | <code>string</code> | Filter the list of organizations to the ones that are a sub-organization of the specified organization. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Filter the list of organizations to the ones that are a sub-organization of the specified organization.

"null" is a valid value to provide for this parameter. It means "where
an organization has no parent (i.e. it is a 'root' organization)."

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/organization#id DataCloudflareOrganization#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataCloudflareOrganizationMeta <a name="DataCloudflareOrganizationMeta" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMeta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMeta.Initializer"></a>

```typescript
import { dataCloudflareOrganization } from '@cdktf/provider-cloudflare'

const dataCloudflareOrganizationMeta: dataCloudflareOrganization.DataCloudflareOrganizationMeta = { ... }
```


### DataCloudflareOrganizationMetaFlags <a name="DataCloudflareOrganizationMetaFlags" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlags.Initializer"></a>

```typescript
import { dataCloudflareOrganization } from '@cdktf/provider-cloudflare'

const dataCloudflareOrganizationMetaFlags: dataCloudflareOrganization.DataCloudflareOrganizationMetaFlags = { ... }
```


### DataCloudflareOrganizationParent <a name="DataCloudflareOrganizationParent" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParent.Initializer"></a>

```typescript
import { dataCloudflareOrganization } from '@cdktf/provider-cloudflare'

const dataCloudflareOrganizationParent: dataCloudflareOrganization.DataCloudflareOrganizationParent = { ... }
```


### DataCloudflareOrganizationProfile <a name="DataCloudflareOrganizationProfile" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfile.Initializer"></a>

```typescript
import { dataCloudflareOrganization } from '@cdktf/provider-cloudflare'

const dataCloudflareOrganizationProfile: dataCloudflareOrganization.DataCloudflareOrganizationProfile = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareOrganizationFilterContainingOutputReference <a name="DataCloudflareOrganizationFilterContainingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.Initializer"></a>

```typescript
import { dataCloudflareOrganization } from '@cdktf/provider-cloudflare'

new dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccount` <a name="resetAccount" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.resetAccount"></a>

```typescript
public resetAccount(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.resetUser"></a>

```typescript
public resetUser(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.accountInput">accountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.account">account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining">DataCloudflareOrganizationFilterContaining</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.accountInput"></a>

```typescript
public readonly accountInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareOrganizationFilterContaining;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining">DataCloudflareOrganizationFilterContaining</a>

---


### DataCloudflareOrganizationFilterNameOutputReference <a name="DataCloudflareOrganizationFilterNameOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.Initializer"></a>

```typescript
import { dataCloudflareOrganization } from '@cdktf/provider-cloudflare'

new dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.resetContains">resetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.resetEndsWith">resetEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.resetStartsWith">resetStartsWith</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContains` <a name="resetContains" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.resetContains"></a>

```typescript
public resetContains(): void
```

##### `resetEndsWith` <a name="resetEndsWith" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.resetEndsWith"></a>

```typescript
public resetEndsWith(): void
```

##### `resetStartsWith` <a name="resetStartsWith" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.resetStartsWith"></a>

```typescript
public resetStartsWith(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.containsInput">containsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.endsWithInput">endsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.startsWithInput">startsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.contains">contains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.endsWith">endsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.startsWith">startsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName">DataCloudflareOrganizationFilterName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containsInput`<sup>Optional</sup> <a name="containsInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.containsInput"></a>

```typescript
public readonly containsInput: string;
```

- *Type:* string

---

##### `endsWithInput`<sup>Optional</sup> <a name="endsWithInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.endsWithInput"></a>

```typescript
public readonly endsWithInput: string;
```

- *Type:* string

---

##### `startsWithInput`<sup>Optional</sup> <a name="startsWithInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.startsWithInput"></a>

```typescript
public readonly startsWithInput: string;
```

- *Type:* string

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.contains"></a>

```typescript
public readonly contains: string;
```

- *Type:* string

---

##### `endsWith`<sup>Required</sup> <a name="endsWith" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.endsWith"></a>

```typescript
public readonly endsWith: string;
```

- *Type:* string

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.startsWith"></a>

```typescript
public readonly startsWith: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareOrganizationFilterName;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName">DataCloudflareOrganizationFilterName</a>

---


### DataCloudflareOrganizationFilterOutputReference <a name="DataCloudflareOrganizationFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareOrganization } from '@cdktf/provider-cloudflare'

new dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putContaining">putContaining</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putName">putName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putParent">putParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetContaining">resetContaining</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetPageToken">resetPageToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetParent">resetParent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContaining` <a name="putContaining" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putContaining"></a>

```typescript
public putContaining(value: DataCloudflareOrganizationFilterContaining): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putContaining.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining">DataCloudflareOrganizationFilterContaining</a>

---

##### `putName` <a name="putName" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putName"></a>

```typescript
public putName(value: DataCloudflareOrganizationFilterName): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName">DataCloudflareOrganizationFilterName</a>

---

##### `putParent` <a name="putParent" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putParent"></a>

```typescript
public putParent(value: DataCloudflareOrganizationFilterParent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.putParent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent">DataCloudflareOrganizationFilterParent</a>

---

##### `resetContaining` <a name="resetContaining" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetContaining"></a>

```typescript
public resetContaining(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPageSize` <a name="resetPageSize" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetPageToken` <a name="resetPageToken" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetPageToken"></a>

```typescript
public resetPageToken(): void
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.resetParent"></a>

```typescript
public resetParent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.containing">containing</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference">DataCloudflareOrganizationFilterContainingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.name">name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference">DataCloudflareOrganizationFilterNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.parent">parent</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference">DataCloudflareOrganizationFilterParentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.containingInput">containingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining">DataCloudflareOrganizationFilterContaining</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.idInput">idInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.nameInput">nameInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName">DataCloudflareOrganizationFilterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.pageTokenInput">pageTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.parentInput">parentInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent">DataCloudflareOrganizationFilterParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.id">id</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.pageToken">pageToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter">DataCloudflareOrganizationFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containing`<sup>Required</sup> <a name="containing" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.containing"></a>

```typescript
public readonly containing: DataCloudflareOrganizationFilterContainingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContainingOutputReference">DataCloudflareOrganizationFilterContainingOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.name"></a>

```typescript
public readonly name: DataCloudflareOrganizationFilterNameOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterNameOutputReference">DataCloudflareOrganizationFilterNameOutputReference</a>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.parent"></a>

```typescript
public readonly parent: DataCloudflareOrganizationFilterParentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference">DataCloudflareOrganizationFilterParentOutputReference</a>

---

##### `containingInput`<sup>Optional</sup> <a name="containingInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.containingInput"></a>

```typescript
public readonly containingInput: IResolvable | DataCloudflareOrganizationFilterContaining;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterContaining">DataCloudflareOrganizationFilterContaining</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: IResolvable | DataCloudflareOrganizationFilterName;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterName">DataCloudflareOrganizationFilterName</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `pageTokenInput`<sup>Optional</sup> <a name="pageTokenInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.pageTokenInput"></a>

```typescript
public readonly pageTokenInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.parentInput"></a>

```typescript
public readonly parentInput: IResolvable | DataCloudflareOrganizationFilterParent;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent">DataCloudflareOrganizationFilterParent</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.id"></a>

```typescript
public readonly id: string[];
```

- *Type:* string[]

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

##### `pageToken`<sup>Required</sup> <a name="pageToken" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.pageToken"></a>

```typescript
public readonly pageToken: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareOrganizationFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilter">DataCloudflareOrganizationFilter</a>

---


### DataCloudflareOrganizationFilterParentOutputReference <a name="DataCloudflareOrganizationFilterParentOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.Initializer"></a>

```typescript
import { dataCloudflareOrganization } from '@cdktf/provider-cloudflare'

new dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.resetId"></a>

```typescript
public resetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent">DataCloudflareOrganizationFilterParent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareOrganizationFilterParent;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationFilterParent">DataCloudflareOrganizationFilterParent</a>

---


### DataCloudflareOrganizationMetaFlagsOutputReference <a name="DataCloudflareOrganizationMetaFlagsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareOrganization } from '@cdktf/provider-cloudflare'

new dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.accountCreation">accountCreation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.accountDeletion">accountDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.accountMigration">accountMigration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.accountMobility">accountMobility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.subOrgCreation">subOrgCreation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlags">DataCloudflareOrganizationMetaFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountCreation`<sup>Required</sup> <a name="accountCreation" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.accountCreation"></a>

```typescript
public readonly accountCreation: string;
```

- *Type:* string

---

##### `accountDeletion`<sup>Required</sup> <a name="accountDeletion" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.accountDeletion"></a>

```typescript
public readonly accountDeletion: string;
```

- *Type:* string

---

##### `accountMigration`<sup>Required</sup> <a name="accountMigration" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.accountMigration"></a>

```typescript
public readonly accountMigration: string;
```

- *Type:* string

---

##### `accountMobility`<sup>Required</sup> <a name="accountMobility" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.accountMobility"></a>

```typescript
public readonly accountMobility: string;
```

- *Type:* string

---

##### `subOrgCreation`<sup>Required</sup> <a name="subOrgCreation" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.subOrgCreation"></a>

```typescript
public readonly subOrgCreation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareOrganizationMetaFlags;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlags">DataCloudflareOrganizationMetaFlags</a>

---


### DataCloudflareOrganizationMetaOutputReference <a name="DataCloudflareOrganizationMetaOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.Initializer"></a>

```typescript
import { dataCloudflareOrganization } from '@cdktf/provider-cloudflare'

new dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.flags">flags</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference">DataCloudflareOrganizationMetaFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.managedBy">managedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMeta">DataCloudflareOrganizationMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flags`<sup>Required</sup> <a name="flags" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.flags"></a>

```typescript
public readonly flags: DataCloudflareOrganizationMetaFlagsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaFlagsOutputReference">DataCloudflareOrganizationMetaFlagsOutputReference</a>

---

##### `managedBy`<sup>Required</sup> <a name="managedBy" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.managedBy"></a>

```typescript
public readonly managedBy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareOrganizationMeta;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationMeta">DataCloudflareOrganizationMeta</a>

---


### DataCloudflareOrganizationParentOutputReference <a name="DataCloudflareOrganizationParentOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.Initializer"></a>

```typescript
import { dataCloudflareOrganization } from '@cdktf/provider-cloudflare'

new dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParent">DataCloudflareOrganizationParent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareOrganizationParent;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationParent">DataCloudflareOrganizationParent</a>

---


### DataCloudflareOrganizationProfileOutputReference <a name="DataCloudflareOrganizationProfileOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.Initializer"></a>

```typescript
import { dataCloudflareOrganization } from '@cdktf/provider-cloudflare'

new dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.businessAddress">businessAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.businessEmail">businessEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.businessName">businessName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.businessPhone">businessPhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.externalMetadata">externalMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfile">DataCloudflareOrganizationProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `businessAddress`<sup>Required</sup> <a name="businessAddress" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.businessAddress"></a>

```typescript
public readonly businessAddress: string;
```

- *Type:* string

---

##### `businessEmail`<sup>Required</sup> <a name="businessEmail" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.businessEmail"></a>

```typescript
public readonly businessEmail: string;
```

- *Type:* string

---

##### `businessName`<sup>Required</sup> <a name="businessName" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.businessName"></a>

```typescript
public readonly businessName: string;
```

- *Type:* string

---

##### `businessPhone`<sup>Required</sup> <a name="businessPhone" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.businessPhone"></a>

```typescript
public readonly businessPhone: string;
```

- *Type:* string

---

##### `externalMetadata`<sup>Required</sup> <a name="externalMetadata" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.externalMetadata"></a>

```typescript
public readonly externalMetadata: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareOrganizationProfile;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareOrganization.DataCloudflareOrganizationProfile">DataCloudflareOrganizationProfile</a>

---



