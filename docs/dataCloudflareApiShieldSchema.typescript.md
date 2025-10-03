# `dataCloudflareApiShieldSchema` Submodule <a name="`dataCloudflareApiShieldSchema` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareApiShieldSchema <a name="DataCloudflareApiShieldSchema" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/api_shield_schema cloudflare_api_shield_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.Initializer"></a>

```typescript
import { dataCloudflareApiShieldSchema } from '@cdktf/provider-cloudflare'

new dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema(scope: Construct, id: string, config: DataCloudflareApiShieldSchemaConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchemaConfig">DataCloudflareApiShieldSchemaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchemaConfig">DataCloudflareApiShieldSchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.resetOmitSource">resetOmitSource</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetOmitSource` <a name="resetOmitSource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.resetOmitSource"></a>

```typescript
public resetOmitSource(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareApiShieldSchema resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.isConstruct"></a>

```typescript
import { dataCloudflareApiShieldSchema } from '@cdktf/provider-cloudflare'

dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.isTerraformElement"></a>

```typescript
import { dataCloudflareApiShieldSchema } from '@cdktf/provider-cloudflare'

dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.isTerraformDataSource"></a>

```typescript
import { dataCloudflareApiShieldSchema } from '@cdktf/provider-cloudflare'

dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.generateConfigForImport"></a>

```typescript
import { dataCloudflareApiShieldSchema } from '@cdktf/provider-cloudflare'

dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareApiShieldSchema resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareApiShieldSchema to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareApiShieldSchema that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/api_shield_schema#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareApiShieldSchema to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.validationEnabled">validationEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.omitSourceInput">omitSourceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.schemaIdInput">schemaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.omitSource">omitSource</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.schemaId">schemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `validationEnabled`<sup>Required</sup> <a name="validationEnabled" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.validationEnabled"></a>

```typescript
public readonly validationEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `omitSourceInput`<sup>Optional</sup> <a name="omitSourceInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.omitSourceInput"></a>

```typescript
public readonly omitSourceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemaIdInput`<sup>Optional</sup> <a name="schemaIdInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.schemaIdInput"></a>

```typescript
public readonly schemaIdInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `omitSource`<sup>Required</sup> <a name="omitSource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.omitSource"></a>

```typescript
public readonly omitSource: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.schemaId"></a>

```typescript
public readonly schemaId: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchema.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareApiShieldSchemaConfig <a name="DataCloudflareApiShieldSchemaConfig" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchemaConfig.Initializer"></a>

```typescript
import { dataCloudflareApiShieldSchema } from '@cdktf/provider-cloudflare'

const dataCloudflareApiShieldSchemaConfig: dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchemaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchemaConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchemaConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchemaConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchemaConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchemaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchemaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchemaConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchemaConfig.property.schemaId">schemaId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/api_shield_schema#schema_id DataCloudflareApiShieldSchema#schema_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchemaConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchemaConfig.property.omitSource">omitSource</a></code> | <code>boolean \| cdktf.IResolvable</code> | Omit the source-files of schemas and only retrieve their meta-data. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchemaConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchemaConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchemaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchemaConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchemaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchemaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchemaConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchemaConfig.property.schemaId"></a>

```typescript
public readonly schemaId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/api_shield_schema#schema_id DataCloudflareApiShieldSchema#schema_id}.

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchemaConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/api_shield_schema#zone_id DataCloudflareApiShieldSchema#zone_id}

---

##### `omitSource`<sup>Optional</sup> <a name="omitSource" id="@cdktf/provider-cloudflare.dataCloudflareApiShieldSchema.DataCloudflareApiShieldSchemaConfig.property.omitSource"></a>

```typescript
public readonly omitSource: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Omit the source-files of schemas and only retrieve their meta-data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/api_shield_schema#omit_source DataCloudflareApiShieldSchema#omit_source}

---



