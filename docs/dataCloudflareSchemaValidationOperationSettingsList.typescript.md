# `dataCloudflareSchemaValidationOperationSettingsList` Submodule <a name="`dataCloudflareSchemaValidationOperationSettingsList` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareSchemaValidationOperationSettingsList <a name="DataCloudflareSchemaValidationOperationSettingsList" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_operation_settings_list cloudflare_schema_validation_operation_settings_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.Initializer"></a>

```typescript
import { dataCloudflareSchemaValidationOperationSettingsList } from '@cdktf/provider-cloudflare'

new dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList(scope: Construct, id: string, config: DataCloudflareSchemaValidationOperationSettingsListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig">DataCloudflareSchemaValidationOperationSettingsListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig">DataCloudflareSchemaValidationOperationSettingsListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareSchemaValidationOperationSettingsList resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.isConstruct"></a>

```typescript
import { dataCloudflareSchemaValidationOperationSettingsList } from '@cdktf/provider-cloudflare'

dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.isTerraformElement"></a>

```typescript
import { dataCloudflareSchemaValidationOperationSettingsList } from '@cdktf/provider-cloudflare'

dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.isTerraformDataSource"></a>

```typescript
import { dataCloudflareSchemaValidationOperationSettingsList } from '@cdktf/provider-cloudflare'

dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.generateConfigForImport"></a>

```typescript
import { dataCloudflareSchemaValidationOperationSettingsList } from '@cdktf/provider-cloudflare'

dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareSchemaValidationOperationSettingsList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareSchemaValidationOperationSettingsList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareSchemaValidationOperationSettingsList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_operation_settings_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareSchemaValidationOperationSettingsList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList">DataCloudflareSchemaValidationOperationSettingsListResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.result"></a>

```typescript
public readonly result: DataCloudflareSchemaValidationOperationSettingsListResultList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList">DataCloudflareSchemaValidationOperationSettingsListResultList</a>

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareSchemaValidationOperationSettingsListConfig <a name="DataCloudflareSchemaValidationOperationSettingsListConfig" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.Initializer"></a>

```typescript
import { dataCloudflareSchemaValidationOperationSettingsList } from '@cdktf/provider-cloudflare'

const dataCloudflareSchemaValidationOperationSettingsListConfig: dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_operation_settings_list#zone_id DataCloudflareSchemaValidationOperationSettingsList#zone_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_operation_settings_list#max_items DataCloudflareSchemaValidationOperationSettingsList#max_items}

---

### DataCloudflareSchemaValidationOperationSettingsListResult <a name="DataCloudflareSchemaValidationOperationSettingsListResult" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResult.Initializer"></a>

```typescript
import { dataCloudflareSchemaValidationOperationSettingsList } from '@cdktf/provider-cloudflare'

const dataCloudflareSchemaValidationOperationSettingsListResult: dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareSchemaValidationOperationSettingsListResultList <a name="DataCloudflareSchemaValidationOperationSettingsListResultList" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.Initializer"></a>

```typescript
import { dataCloudflareSchemaValidationOperationSettingsList } from '@cdktf/provider-cloudflare'

new dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.get"></a>

```typescript
public get(index: number): DataCloudflareSchemaValidationOperationSettingsListResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareSchemaValidationOperationSettingsListResultOutputReference <a name="DataCloudflareSchemaValidationOperationSettingsListResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareSchemaValidationOperationSettingsList } from '@cdktf/provider-cloudflare'

new dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.property.mitigationAction">mitigationAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.property.operationId">operationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResult">DataCloudflareSchemaValidationOperationSettingsListResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mitigationAction`<sup>Required</sup> <a name="mitigationAction" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.property.mitigationAction"></a>

```typescript
public readonly mitigationAction: string;
```

- *Type:* string

---

##### `operationId`<sup>Required</sup> <a name="operationId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.property.operationId"></a>

```typescript
public readonly operationId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareSchemaValidationOperationSettingsListResult;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResult">DataCloudflareSchemaValidationOperationSettingsListResult</a>

---



