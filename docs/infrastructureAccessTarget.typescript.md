# `infrastructureAccessTarget` Submodule <a name="`infrastructureAccessTarget` Submodule" id="@cdktf/provider-cloudflare.infrastructureAccessTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InfrastructureAccessTarget <a name="InfrastructureAccessTarget" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/infrastructure_access_target cloudflare_infrastructure_access_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer"></a>

```typescript
import { infrastructureAccessTarget } from '@cdktf/provider-cloudflare'

new infrastructureAccessTarget.InfrastructureAccessTarget(scope: Construct, id: string, config: InfrastructureAccessTargetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig">InfrastructureAccessTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig">InfrastructureAccessTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.putIp">putIp</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIp` <a name="putIp" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.putIp"></a>

```typescript
public putIp(value: InfrastructureAccessTargetIp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.putIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp">InfrastructureAccessTargetIp</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a InfrastructureAccessTarget resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.isConstruct"></a>

```typescript
import { infrastructureAccessTarget } from '@cdktf/provider-cloudflare'

infrastructureAccessTarget.InfrastructureAccessTarget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.isTerraformElement"></a>

```typescript
import { infrastructureAccessTarget } from '@cdktf/provider-cloudflare'

infrastructureAccessTarget.InfrastructureAccessTarget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.isTerraformResource"></a>

```typescript
import { infrastructureAccessTarget } from '@cdktf/provider-cloudflare'

infrastructureAccessTarget.InfrastructureAccessTarget.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.generateConfigForImport"></a>

```typescript
import { infrastructureAccessTarget } from '@cdktf/provider-cloudflare'

infrastructureAccessTarget.InfrastructureAccessTarget.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a InfrastructureAccessTarget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the InfrastructureAccessTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing InfrastructureAccessTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/infrastructure_access_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the InfrastructureAccessTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.ip">ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference">InfrastructureAccessTargetIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.ipInput">ipInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp">InfrastructureAccessTargetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.ip"></a>

```typescript
public readonly ip: InfrastructureAccessTargetIpOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference">InfrastructureAccessTargetIpOutputReference</a>

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.ipInput"></a>

```typescript
public readonly ipInput: IResolvable | InfrastructureAccessTargetIp;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp">InfrastructureAccessTargetIp</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InfrastructureAccessTargetConfig <a name="InfrastructureAccessTargetConfig" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.Initializer"></a>

```typescript
import { infrastructureAccessTarget } from '@cdktf/provider-cloudflare'

const infrastructureAccessTargetConfig: infrastructureAccessTarget.InfrastructureAccessTargetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.accountId">accountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.hostname">hostname</a></code> | <code>string</code> | A non-unique field that refers to a target. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.ip">ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp">InfrastructureAccessTargetIp</a></code> | The IPv4/IPv6 address that identifies where to reach a target. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/infrastructure_access_target#account_id InfrastructureAccessTarget#account_id}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

A non-unique field that refers to a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/infrastructure_access_target#hostname InfrastructureAccessTarget#hostname}

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.ip"></a>

```typescript
public readonly ip: InfrastructureAccessTargetIp;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp">InfrastructureAccessTargetIp</a>

The IPv4/IPv6 address that identifies where to reach a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/infrastructure_access_target#ip InfrastructureAccessTarget#ip}

---

### InfrastructureAccessTargetIp <a name="InfrastructureAccessTargetIp" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp.Initializer"></a>

```typescript
import { infrastructureAccessTarget } from '@cdktf/provider-cloudflare'

const infrastructureAccessTargetIp: infrastructureAccessTarget.InfrastructureAccessTargetIp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4">InfrastructureAccessTargetIpIpv4</a></code> | The target's IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6">InfrastructureAccessTargetIpIpv6</a></code> | The target's IPv6 address. |

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp.property.ipv4"></a>

```typescript
public readonly ipv4: InfrastructureAccessTargetIpIpv4;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4">InfrastructureAccessTargetIpIpv4</a>

The target's IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/infrastructure_access_target#ipv4 InfrastructureAccessTarget#ipv4}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp.property.ipv6"></a>

```typescript
public readonly ipv6: InfrastructureAccessTargetIpIpv6;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6">InfrastructureAccessTargetIpIpv6</a>

The target's IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/infrastructure_access_target#ipv6 InfrastructureAccessTarget#ipv6}

---

### InfrastructureAccessTargetIpIpv4 <a name="InfrastructureAccessTargetIpIpv4" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4.Initializer"></a>

```typescript
import { infrastructureAccessTarget } from '@cdktf/provider-cloudflare'

const infrastructureAccessTargetIpIpv4: infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4.property.ipAddr">ipAddr</a></code> | <code>string</code> | The IP address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | The private virtual network identifier for the target. |

---

##### `ipAddr`<sup>Required</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4.property.ipAddr"></a>

```typescript
public readonly ipAddr: string;
```

- *Type:* string

The IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/infrastructure_access_target#ip_addr InfrastructureAccessTarget#ip_addr}

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/infrastructure_access_target#virtual_network_id InfrastructureAccessTarget#virtual_network_id}

---

### InfrastructureAccessTargetIpIpv6 <a name="InfrastructureAccessTargetIpIpv6" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6.Initializer"></a>

```typescript
import { infrastructureAccessTarget } from '@cdktf/provider-cloudflare'

const infrastructureAccessTargetIpIpv6: infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6.property.ipAddr">ipAddr</a></code> | <code>string</code> | The IP address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | The private virtual network identifier for the target. |

---

##### `ipAddr`<sup>Required</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6.property.ipAddr"></a>

```typescript
public readonly ipAddr: string;
```

- *Type:* string

The IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/infrastructure_access_target#ip_addr InfrastructureAccessTarget#ip_addr}

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/infrastructure_access_target#virtual_network_id InfrastructureAccessTarget#virtual_network_id}

---

## Classes <a name="Classes" id="Classes"></a>

### InfrastructureAccessTargetIpIpv4OutputReference <a name="InfrastructureAccessTargetIpIpv4OutputReference" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.Initializer"></a>

```typescript
import { infrastructureAccessTarget } from '@cdktf/provider-cloudflare'

new infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.ipAddrInput">ipAddrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.ipAddr">ipAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4">InfrastructureAccessTargetIpIpv4</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddrInput`<sup>Optional</sup> <a name="ipAddrInput" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.ipAddrInput"></a>

```typescript
public readonly ipAddrInput: string;
```

- *Type:* string

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.virtualNetworkIdInput"></a>

```typescript
public readonly virtualNetworkIdInput: string;
```

- *Type:* string

---

##### `ipAddr`<sup>Required</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.ipAddr"></a>

```typescript
public readonly ipAddr: string;
```

- *Type:* string

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InfrastructureAccessTargetIpIpv4;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4">InfrastructureAccessTargetIpIpv4</a>

---


### InfrastructureAccessTargetIpIpv6OutputReference <a name="InfrastructureAccessTargetIpIpv6OutputReference" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.Initializer"></a>

```typescript
import { infrastructureAccessTarget } from '@cdktf/provider-cloudflare'

new infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.ipAddrInput">ipAddrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.ipAddr">ipAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6">InfrastructureAccessTargetIpIpv6</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddrInput`<sup>Optional</sup> <a name="ipAddrInput" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.ipAddrInput"></a>

```typescript
public readonly ipAddrInput: string;
```

- *Type:* string

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.virtualNetworkIdInput"></a>

```typescript
public readonly virtualNetworkIdInput: string;
```

- *Type:* string

---

##### `ipAddr`<sup>Required</sup> <a name="ipAddr" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.ipAddr"></a>

```typescript
public readonly ipAddr: string;
```

- *Type:* string

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InfrastructureAccessTargetIpIpv6;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6">InfrastructureAccessTargetIpIpv6</a>

---


### InfrastructureAccessTargetIpOutputReference <a name="InfrastructureAccessTargetIpOutputReference" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.Initializer"></a>

```typescript
import { infrastructureAccessTarget } from '@cdktf/provider-cloudflare'

new infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.putIpv4">putIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.putIpv6">putIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.resetIpv4">resetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.resetIpv6">resetIpv6</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpv4` <a name="putIpv4" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.putIpv4"></a>

```typescript
public putIpv4(value: InfrastructureAccessTargetIpIpv4): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.putIpv4.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4">InfrastructureAccessTargetIpIpv4</a>

---

##### `putIpv6` <a name="putIpv6" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.putIpv6"></a>

```typescript
public putIpv6(value: InfrastructureAccessTargetIpIpv6): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.putIpv6.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6">InfrastructureAccessTargetIpIpv6</a>

---

##### `resetIpv4` <a name="resetIpv4" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.resetIpv4"></a>

```typescript
public resetIpv4(): void
```

##### `resetIpv6` <a name="resetIpv6" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.resetIpv6"></a>

```typescript
public resetIpv6(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference">InfrastructureAccessTargetIpIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference">InfrastructureAccessTargetIpIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.ipv4Input">ipv4Input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4">InfrastructureAccessTargetIpIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.ipv6Input">ipv6Input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6">InfrastructureAccessTargetIpIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp">InfrastructureAccessTargetIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.ipv4"></a>

```typescript
public readonly ipv4: InfrastructureAccessTargetIpIpv4OutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference">InfrastructureAccessTargetIpIpv4OutputReference</a>

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.ipv6"></a>

```typescript
public readonly ipv6: InfrastructureAccessTargetIpIpv6OutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference">InfrastructureAccessTargetIpIpv6OutputReference</a>

---

##### `ipv4Input`<sup>Optional</sup> <a name="ipv4Input" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.ipv4Input"></a>

```typescript
public readonly ipv4Input: IResolvable | InfrastructureAccessTargetIpIpv4;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4">InfrastructureAccessTargetIpIpv4</a>

---

##### `ipv6Input`<sup>Optional</sup> <a name="ipv6Input" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.ipv6Input"></a>

```typescript
public readonly ipv6Input: IResolvable | InfrastructureAccessTargetIpIpv6;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6">InfrastructureAccessTargetIpIpv6</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InfrastructureAccessTargetIp;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp">InfrastructureAccessTargetIp</a>

---



