# `dataCloudflareSchemaValidationOperationSettings` Submodule <a name="`dataCloudflareSchemaValidationOperationSettings` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareSchemaValidationOperationSettings <a name="DataCloudflareSchemaValidationOperationSettings" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/schema_validation_operation_settings cloudflare_schema_validation_operation_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.Initializer"></a>

```typescript
import { dataCloudflareSchemaValidationOperationSettings } from '@cdktf/provider-cloudflare'

new dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings(scope: Construct, id: string, config: DataCloudflareSchemaValidationOperationSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettingsConfig">DataCloudflareSchemaValidationOperationSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettingsConfig">DataCloudflareSchemaValidationOperationSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareSchemaValidationOperationSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.isConstruct"></a>

```typescript
import { dataCloudflareSchemaValidationOperationSettings } from '@cdktf/provider-cloudflare'

dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.isTerraformElement"></a>

```typescript
import { dataCloudflareSchemaValidationOperationSettings } from '@cdktf/provider-cloudflare'

dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.isTerraformDataSource"></a>

```typescript
import { dataCloudflareSchemaValidationOperationSettings } from '@cdktf/provider-cloudflare'

dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.generateConfigForImport"></a>

```typescript
import { dataCloudflareSchemaValidationOperationSettings } from '@cdktf/provider-cloudflare'

dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareSchemaValidationOperationSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareSchemaValidationOperationSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareSchemaValidationOperationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/schema_validation_operation_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareSchemaValidationOperationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.mitigationAction">mitigationAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.operationIdInput">operationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.operationId">operationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `mitigationAction`<sup>Required</sup> <a name="mitigationAction" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.mitigationAction"></a>

```typescript
public readonly mitigationAction: string;
```

- *Type:* string

---

##### `operationIdInput`<sup>Optional</sup> <a name="operationIdInput" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.operationIdInput"></a>

```typescript
public readonly operationIdInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `operationId`<sup>Required</sup> <a name="operationId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.operationId"></a>

```typescript
public readonly operationId: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareSchemaValidationOperationSettingsConfig <a name="DataCloudflareSchemaValidationOperationSettingsConfig" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettingsConfig.Initializer"></a>

```typescript
import { dataCloudflareSchemaValidationOperationSettings } from '@cdktf/provider-cloudflare'

const dataCloudflareSchemaValidationOperationSettingsConfig: dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettingsConfig.property.operationId">operationId</a></code> | <code>string</code> | UUID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettingsConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `operationId`<sup>Required</sup> <a name="operationId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettingsConfig.property.operationId"></a>

```typescript
public readonly operationId: string;
```

- *Type:* string

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/schema_validation_operation_settings#operation_id DataCloudflareSchemaValidationOperationSettings#operation_id}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettings.DataCloudflareSchemaValidationOperationSettingsConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/schema_validation_operation_settings#zone_id DataCloudflareSchemaValidationOperationSettings#zone_id}

---



