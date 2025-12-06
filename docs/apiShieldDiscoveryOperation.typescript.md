# `apiShieldDiscoveryOperation` Submodule <a name="`apiShieldDiscoveryOperation` Submodule" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiShieldDiscoveryOperation <a name="ApiShieldDiscoveryOperation" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/api_shield_discovery_operation cloudflare_api_shield_discovery_operation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer"></a>

```typescript
import { apiShieldDiscoveryOperation } from '@cdktf/provider-cloudflare'

new apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation(scope: Construct, id: string, config: ApiShieldDiscoveryOperationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig">ApiShieldDiscoveryOperationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig">ApiShieldDiscoveryOperationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetState` <a name="resetState" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiShieldDiscoveryOperation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isConstruct"></a>

```typescript
import { apiShieldDiscoveryOperation } from '@cdktf/provider-cloudflare'

apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isTerraformElement"></a>

```typescript
import { apiShieldDiscoveryOperation } from '@cdktf/provider-cloudflare'

apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isTerraformResource"></a>

```typescript
import { apiShieldDiscoveryOperation } from '@cdktf/provider-cloudflare'

apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.generateConfigForImport"></a>

```typescript
import { apiShieldDiscoveryOperation } from '@cdktf/provider-cloudflare'

apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApiShieldDiscoveryOperation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiShieldDiscoveryOperation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiShieldDiscoveryOperation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/api_shield_discovery_operation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiShieldDiscoveryOperation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.operationIdInput">operationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.operationId">operationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `operationIdInput`<sup>Optional</sup> <a name="operationIdInput" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.operationIdInput"></a>

```typescript
public readonly operationIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `operationId`<sup>Required</sup> <a name="operationId" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.operationId"></a>

```typescript
public readonly operationId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiShieldDiscoveryOperationConfig <a name="ApiShieldDiscoveryOperationConfig" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.Initializer"></a>

```typescript
import { apiShieldDiscoveryOperation } from '@cdktf/provider-cloudflare'

const apiShieldDiscoveryOperationConfig: apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.operationId">operationId</a></code> | <code>string</code> | UUID. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.state">state</a></code> | <code>string</code> | Mark state of operation in API Discovery   * `review` - Mark operation as for review   * `ignored` - Mark operation as ignored Available values: "review", "ignored". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `operationId`<sup>Required</sup> <a name="operationId" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.operationId"></a>

```typescript
public readonly operationId: string;
```

- *Type:* string

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/api_shield_discovery_operation#operation_id ApiShieldDiscoveryOperation#operation_id}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/api_shield_discovery_operation#zone_id ApiShieldDiscoveryOperation#zone_id}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Mark state of operation in API Discovery   * `review` - Mark operation as for review   * `ignored` - Mark operation as ignored Available values: "review", "ignored".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/api_shield_discovery_operation#state ApiShieldDiscoveryOperation#state}

---



