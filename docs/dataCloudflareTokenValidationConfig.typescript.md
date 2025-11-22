# `dataCloudflareTokenValidationConfig` Submodule <a name="`dataCloudflareTokenValidationConfig` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareTokenValidationConfig <a name="DataCloudflareTokenValidationConfig" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_config cloudflare_token_validation_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationConfig } from '@cdktf/provider-cloudflare'

new dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig(scope: Construct, id: string, config: DataCloudflareTokenValidationConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig">DataCloudflareTokenValidationConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig">DataCloudflareTokenValidationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareTokenValidationConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.isConstruct"></a>

```typescript
import { dataCloudflareTokenValidationConfig } from '@cdktf/provider-cloudflare'

dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.isTerraformElement"></a>

```typescript
import { dataCloudflareTokenValidationConfig } from '@cdktf/provider-cloudflare'

dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.isTerraformDataSource"></a>

```typescript
import { dataCloudflareTokenValidationConfig } from '@cdktf/provider-cloudflare'

dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.generateConfigForImport"></a>

```typescript
import { dataCloudflareTokenValidationConfig } from '@cdktf/provider-cloudflare'

dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareTokenValidationConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareTokenValidationConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareTokenValidationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareTokenValidationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference">DataCloudflareTokenValidationConfigCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.lastUpdated">lastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.tokenSources">tokenSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.tokenType">tokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.configIdInput">configIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.configId">configId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.credentials"></a>

```typescript
public readonly credentials: DataCloudflareTokenValidationConfigCredentialsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference">DataCloudflareTokenValidationConfigCredentialsOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.lastUpdated"></a>

```typescript
public readonly lastUpdated: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `tokenSources`<sup>Required</sup> <a name="tokenSources" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.tokenSources"></a>

```typescript
public readonly tokenSources: string[];
```

- *Type:* string[]

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

---

##### `configIdInput`<sup>Optional</sup> <a name="configIdInput" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.configIdInput"></a>

```typescript
public readonly configIdInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareTokenValidationConfigConfig <a name="DataCloudflareTokenValidationConfigConfig" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationConfig } from '@cdktf/provider-cloudflare'

const dataCloudflareTokenValidationConfigConfig: dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.configId">configId</a></code> | <code>string</code> | UUID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_config#config_id DataCloudflareTokenValidationConfig#config_id}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/token_validation_config#zone_id DataCloudflareTokenValidationConfig#zone_id}

---

### DataCloudflareTokenValidationConfigCredentials <a name="DataCloudflareTokenValidationConfigCredentials" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentials.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationConfig } from '@cdktf/provider-cloudflare'

const dataCloudflareTokenValidationConfigCredentials: dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentials = { ... }
```


### DataCloudflareTokenValidationConfigCredentialsKeys <a name="DataCloudflareTokenValidationConfigCredentialsKeys" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeys.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationConfig } from '@cdktf/provider-cloudflare'

const dataCloudflareTokenValidationConfigCredentialsKeys: dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeys = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareTokenValidationConfigCredentialsKeysList <a name="DataCloudflareTokenValidationConfigCredentialsKeysList" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationConfig } from '@cdktf/provider-cloudflare'

new dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.get"></a>

```typescript
public get(index: number): DataCloudflareTokenValidationConfigCredentialsKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareTokenValidationConfigCredentialsKeysOutputReference <a name="DataCloudflareTokenValidationConfigCredentialsKeysOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationConfig } from '@cdktf/provider-cloudflare'

new dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.alg">alg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.crv">crv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.e">e</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.kid">kid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.kty">kty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.n">n</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.x">x</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.y">y</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeys">DataCloudflareTokenValidationConfigCredentialsKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alg`<sup>Required</sup> <a name="alg" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.alg"></a>

```typescript
public readonly alg: string;
```

- *Type:* string

---

##### `crv`<sup>Required</sup> <a name="crv" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.crv"></a>

```typescript
public readonly crv: string;
```

- *Type:* string

---

##### `e`<sup>Required</sup> <a name="e" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.e"></a>

```typescript
public readonly e: string;
```

- *Type:* string

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.kid"></a>

```typescript
public readonly kid: string;
```

- *Type:* string

---

##### `kty`<sup>Required</sup> <a name="kty" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.kty"></a>

```typescript
public readonly kty: string;
```

- *Type:* string

---

##### `n`<sup>Required</sup> <a name="n" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.n"></a>

```typescript
public readonly n: string;
```

- *Type:* string

---

##### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.x"></a>

```typescript
public readonly x: string;
```

- *Type:* string

---

##### `y`<sup>Required</sup> <a name="y" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.y"></a>

```typescript
public readonly y: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareTokenValidationConfigCredentialsKeys;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeys">DataCloudflareTokenValidationConfigCredentialsKeys</a>

---


### DataCloudflareTokenValidationConfigCredentialsOutputReference <a name="DataCloudflareTokenValidationConfigCredentialsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareTokenValidationConfig } from '@cdktf/provider-cloudflare'

new dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.property.keys">keys</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList">DataCloudflareTokenValidationConfigCredentialsKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentials">DataCloudflareTokenValidationConfigCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.property.keys"></a>

```typescript
public readonly keys: DataCloudflareTokenValidationConfigCredentialsKeysList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsKeysList">DataCloudflareTokenValidationConfigCredentialsKeysList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareTokenValidationConfigCredentials;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareTokenValidationConfig.DataCloudflareTokenValidationConfigCredentials">DataCloudflareTokenValidationConfigCredentials</a>

---



