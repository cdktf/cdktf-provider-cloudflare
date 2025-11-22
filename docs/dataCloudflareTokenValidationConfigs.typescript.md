# `dataCloudflareTokenValidationConfigs` Submodule <a name="`dataCloudflareTokenValidationConfigs` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareTokenValidationConfigs <a name="DataCloudflareTokenValidationConfigs" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_configs cloudflare_token_validation_configs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationConfigs } from '@cdktf/provider-cloudflare'

new dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs(scope: Construct, id: string, config: DataCloudflareTokenValidationConfigsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsConfig">DataCloudflareTokenValidationConfigsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsConfig">DataCloudflareTokenValidationConfigsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareTokenValidationConfigs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.isConstruct"></a>

```typescript
import { dataCloudflareTokenValidationConfigs } from '@cdktf/provider-cloudflare'

dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.isTerraformElement"></a>

```typescript
import { dataCloudflareTokenValidationConfigs } from '@cdktf/provider-cloudflare'

dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.isTerraformDataSource"></a>

```typescript
import { dataCloudflareTokenValidationConfigs } from '@cdktf/provider-cloudflare'

dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.generateConfigForImport"></a>

```typescript
import { dataCloudflareTokenValidationConfigs } from '@cdktf/provider-cloudflare'

dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareTokenValidationConfigs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareTokenValidationConfigs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareTokenValidationConfigs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_configs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareTokenValidationConfigs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList">DataCloudflareTokenValidationConfigsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.result"></a>

```typescript
public readonly result: DataCloudflareTokenValidationConfigsResultList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList">DataCloudflareTokenValidationConfigsResultList</a>

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigs.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareTokenValidationConfigsConfig <a name="DataCloudflareTokenValidationConfigsConfig" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsConfig.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationConfigs } from '@cdktf/provider-cloudflare'

const dataCloudflareTokenValidationConfigsConfig: dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_configs#zone_id DataCloudflareTokenValidationConfigs#zone_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_configs#max_items DataCloudflareTokenValidationConfigs#max_items}

---

### DataCloudflareTokenValidationConfigsResult <a name="DataCloudflareTokenValidationConfigsResult" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResult.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationConfigs } from '@cdktf/provider-cloudflare'

const dataCloudflareTokenValidationConfigsResult: dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResult = { ... }
```


### DataCloudflareTokenValidationConfigsResultCredentials <a name="DataCloudflareTokenValidationConfigsResultCredentials" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentials.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationConfigs } from '@cdktf/provider-cloudflare'

const dataCloudflareTokenValidationConfigsResultCredentials: dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentials = { ... }
```


### DataCloudflareTokenValidationConfigsResultCredentialsKeys <a name="DataCloudflareTokenValidationConfigsResultCredentialsKeys" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeys.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationConfigs } from '@cdktf/provider-cloudflare'

const dataCloudflareTokenValidationConfigsResultCredentialsKeys: dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeys = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareTokenValidationConfigsResultCredentialsKeysList <a name="DataCloudflareTokenValidationConfigsResultCredentialsKeysList" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationConfigs } from '@cdktf/provider-cloudflare'

new dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList.get"></a>

```typescript
public get(index: number): DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference <a name="DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationConfigs } from '@cdktf/provider-cloudflare'

new dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.property.alg">alg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.property.crv">crv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.property.e">e</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.property.kid">kid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.property.kty">kty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.property.n">n</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.property.x">x</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.property.y">y</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeys">DataCloudflareTokenValidationConfigsResultCredentialsKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alg`<sup>Required</sup> <a name="alg" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.property.alg"></a>

```typescript
public readonly alg: string;
```

- *Type:* string

---

##### `crv`<sup>Required</sup> <a name="crv" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.property.crv"></a>

```typescript
public readonly crv: string;
```

- *Type:* string

---

##### `e`<sup>Required</sup> <a name="e" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.property.e"></a>

```typescript
public readonly e: string;
```

- *Type:* string

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.property.kid"></a>

```typescript
public readonly kid: string;
```

- *Type:* string

---

##### `kty`<sup>Required</sup> <a name="kty" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.property.kty"></a>

```typescript
public readonly kty: string;
```

- *Type:* string

---

##### `n`<sup>Required</sup> <a name="n" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.property.n"></a>

```typescript
public readonly n: string;
```

- *Type:* string

---

##### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.property.x"></a>

```typescript
public readonly x: string;
```

- *Type:* string

---

##### `y`<sup>Required</sup> <a name="y" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.property.y"></a>

```typescript
public readonly y: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareTokenValidationConfigsResultCredentialsKeys;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeys">DataCloudflareTokenValidationConfigsResultCredentialsKeys</a>

---


### DataCloudflareTokenValidationConfigsResultCredentialsOutputReference <a name="DataCloudflareTokenValidationConfigsResultCredentialsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationConfigs } from '@cdktf/provider-cloudflare'

new dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.property.keys">keys</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList">DataCloudflareTokenValidationConfigsResultCredentialsKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentials">DataCloudflareTokenValidationConfigsResultCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.property.keys"></a>

```typescript
public readonly keys: DataCloudflareTokenValidationConfigsResultCredentialsKeysList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsKeysList">DataCloudflareTokenValidationConfigsResultCredentialsKeysList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareTokenValidationConfigsResultCredentials;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentials">DataCloudflareTokenValidationConfigsResultCredentials</a>

---


### DataCloudflareTokenValidationConfigsResultList <a name="DataCloudflareTokenValidationConfigsResultList" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationConfigs } from '@cdktf/provider-cloudflare'

new dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList.get"></a>

```typescript
public get(index: number): DataCloudflareTokenValidationConfigsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareTokenValidationConfigsResultOutputReference <a name="DataCloudflareTokenValidationConfigsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationConfigs } from '@cdktf/provider-cloudflare'

new dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference">DataCloudflareTokenValidationConfigsResultCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.property.lastUpdated">lastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.property.tokenSources">tokenSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.property.tokenType">tokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResult">DataCloudflareTokenValidationConfigsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.property.credentials"></a>

```typescript
public readonly credentials: DataCloudflareTokenValidationConfigsResultCredentialsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultCredentialsOutputReference">DataCloudflareTokenValidationConfigsResultCredentialsOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.property.lastUpdated"></a>

```typescript
public readonly lastUpdated: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `tokenSources`<sup>Required</sup> <a name="tokenSources" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.property.tokenSources"></a>

```typescript
public readonly tokenSources: string[];
```

- *Type:* string[]

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareTokenValidationConfigsResult;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfigs.DataCloudflareTokenValidationConfigsResult">DataCloudflareTokenValidationConfigsResult</a>

---



