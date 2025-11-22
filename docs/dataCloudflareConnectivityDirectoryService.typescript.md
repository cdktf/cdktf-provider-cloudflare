# `dataCloudflareConnectivityDirectoryService` Submodule <a name="`dataCloudflareConnectivityDirectoryService` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareConnectivityDirectoryService <a name="DataCloudflareConnectivityDirectoryService" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_service cloudflare_connectivity_directory_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer"></a>

```typescript
import { dataCloudflareConnectivityDirectoryService } from '@cdktf/provider-cloudflare'

new dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService(scope: Construct, id: string, config: DataCloudflareConnectivityDirectoryServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig">DataCloudflareConnectivityDirectoryServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig">DataCloudflareConnectivityDirectoryServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.resetServiceId">resetServiceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareConnectivityDirectoryServiceFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter">DataCloudflareConnectivityDirectoryServiceFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetServiceId` <a name="resetServiceId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.resetServiceId"></a>

```typescript
public resetServiceId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareConnectivityDirectoryService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isConstruct"></a>

```typescript
import { dataCloudflareConnectivityDirectoryService } from '@cdktf/provider-cloudflare'

dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isTerraformElement"></a>

```typescript
import { dataCloudflareConnectivityDirectoryService } from '@cdktf/provider-cloudflare'

dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isTerraformDataSource"></a>

```typescript
import { dataCloudflareConnectivityDirectoryService } from '@cdktf/provider-cloudflare'

dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.generateConfigForImport"></a>

```typescript
import { dataCloudflareConnectivityDirectoryService } from '@cdktf/provider-cloudflare'

dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareConnectivityDirectoryService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareConnectivityDirectoryService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareConnectivityDirectoryService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareConnectivityDirectoryService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference">DataCloudflareConnectivityDirectoryServiceFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.host">host</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference">DataCloudflareConnectivityDirectoryServiceHostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.httpPort">httpPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.httpsPort">httpsPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter">DataCloudflareConnectivityDirectoryServiceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.serviceIdInput">serviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.filter"></a>

```typescript
public readonly filter: DataCloudflareConnectivityDirectoryServiceFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference">DataCloudflareConnectivityDirectoryServiceFilterOutputReference</a>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.host"></a>

```typescript
public readonly host: DataCloudflareConnectivityDirectoryServiceHostOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference">DataCloudflareConnectivityDirectoryServiceHostOutputReference</a>

---

##### `httpPort`<sup>Required</sup> <a name="httpPort" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.httpPort"></a>

```typescript
public readonly httpPort: number;
```

- *Type:* number

---

##### `httpsPort`<sup>Required</sup> <a name="httpsPort" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.httpsPort"></a>

```typescript
public readonly httpsPort: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareConnectivityDirectoryServiceFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter">DataCloudflareConnectivityDirectoryServiceFilter</a>

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.serviceIdInput"></a>

```typescript
public readonly serviceIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareConnectivityDirectoryServiceConfig <a name="DataCloudflareConnectivityDirectoryServiceConfig" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.Initializer"></a>

```typescript
import { dataCloudflareConnectivityDirectoryService } from '@cdktf/provider-cloudflare'

const dataCloudflareConnectivityDirectoryServiceConfig: dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_service#account_id DataCloudflareConnectivityDirectoryService#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter">DataCloudflareConnectivityDirectoryServiceFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_service#filter DataCloudflareConnectivityDirectoryService#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.serviceId">serviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_service#service_id DataCloudflareConnectivityDirectoryService#service_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_service#account_id DataCloudflareConnectivityDirectoryService#account_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareConnectivityDirectoryServiceFilter;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter">DataCloudflareConnectivityDirectoryServiceFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_service#filter DataCloudflareConnectivityDirectoryService#filter}.

---

##### `serviceId`<sup>Optional</sup> <a name="serviceId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceConfig.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_service#service_id DataCloudflareConnectivityDirectoryService#service_id}.

---

### DataCloudflareConnectivityDirectoryServiceFilter <a name="DataCloudflareConnectivityDirectoryServiceFilter" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter.Initializer"></a>

```typescript
import { dataCloudflareConnectivityDirectoryService } from '@cdktf/provider-cloudflare'

const dataCloudflareConnectivityDirectoryServiceFilter: dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter.property.type">type</a></code> | <code>string</code> | Available values: "http". |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Available values: "http".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/connectivity_directory_service#type DataCloudflareConnectivityDirectoryService#type}

---

### DataCloudflareConnectivityDirectoryServiceHost <a name="DataCloudflareConnectivityDirectoryServiceHost" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHost.Initializer"></a>

```typescript
import { dataCloudflareConnectivityDirectoryService } from '@cdktf/provider-cloudflare'

const dataCloudflareConnectivityDirectoryServiceHost: dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHost = { ... }
```


### DataCloudflareConnectivityDirectoryServiceHostNetwork <a name="DataCloudflareConnectivityDirectoryServiceHostNetwork" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetwork.Initializer"></a>

```typescript
import { dataCloudflareConnectivityDirectoryService } from '@cdktf/provider-cloudflare'

const dataCloudflareConnectivityDirectoryServiceHostNetwork: dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetwork = { ... }
```


### DataCloudflareConnectivityDirectoryServiceHostResolverNetwork <a name="DataCloudflareConnectivityDirectoryServiceHostResolverNetwork" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetwork.Initializer"></a>

```typescript
import { dataCloudflareConnectivityDirectoryService } from '@cdktf/provider-cloudflare'

const dataCloudflareConnectivityDirectoryServiceHostResolverNetwork: dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetwork = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareConnectivityDirectoryServiceFilterOutputReference <a name="DataCloudflareConnectivityDirectoryServiceFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareConnectivityDirectoryService } from '@cdktf/provider-cloudflare'

new dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter">DataCloudflareConnectivityDirectoryServiceFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareConnectivityDirectoryServiceFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceFilter">DataCloudflareConnectivityDirectoryServiceFilter</a>

---


### DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference <a name="DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.Initializer"></a>

```typescript
import { dataCloudflareConnectivityDirectoryService } from '@cdktf/provider-cloudflare'

new dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.property.tunnelId">tunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetwork">DataCloudflareConnectivityDirectoryServiceHostNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareConnectivityDirectoryServiceHostNetwork;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetwork">DataCloudflareConnectivityDirectoryServiceHostNetwork</a>

---


### DataCloudflareConnectivityDirectoryServiceHostOutputReference <a name="DataCloudflareConnectivityDirectoryServiceHostOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.Initializer"></a>

```typescript
import { dataCloudflareConnectivityDirectoryService } from '@cdktf/provider-cloudflare'

new dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.ipv4">ipv4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.ipv6">ipv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.network">network</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference">DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.resolverNetwork">resolverNetwork</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference">DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHost">DataCloudflareConnectivityDirectoryServiceHost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.ipv4"></a>

```typescript
public readonly ipv4: string;
```

- *Type:* string

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.ipv6"></a>

```typescript
public readonly ipv6: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.network"></a>

```typescript
public readonly network: DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference">DataCloudflareConnectivityDirectoryServiceHostNetworkOutputReference</a>

---

##### `resolverNetwork`<sup>Required</sup> <a name="resolverNetwork" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.resolverNetwork"></a>

```typescript
public readonly resolverNetwork: DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference">DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareConnectivityDirectoryServiceHost;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHost">DataCloudflareConnectivityDirectoryServiceHost</a>

---


### DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference <a name="DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer"></a>

```typescript
import { dataCloudflareConnectivityDirectoryService } from '@cdktf/provider-cloudflare'

new dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.resolverIps">resolverIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.tunnelId">tunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetwork">DataCloudflareConnectivityDirectoryServiceHostResolverNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resolverIps`<sup>Required</sup> <a name="resolverIps" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.resolverIps"></a>

```typescript
public readonly resolverIps: string[];
```

- *Type:* string[]

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareConnectivityDirectoryServiceHostResolverNetwork;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareConnectivityDirectoryService.DataCloudflareConnectivityDirectoryServiceHostResolverNetwork">DataCloudflareConnectivityDirectoryServiceHostResolverNetwork</a>

---



