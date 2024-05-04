# `pagesProject` Submodule <a name="`pagesProject` Submodule" id="@cdktf/provider-cloudflare.pagesProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PagesProject <a name="PagesProject" id="@cdktf/provider-cloudflare.pagesProject.PagesProject"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project cloudflare_pages_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

new pagesProject.PagesProject(scope: Construct, id: string, config: PagesProjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig">PagesProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig">PagesProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.putBuildConfig">putBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.putDeploymentConfigs">putDeploymentConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.resetBuildConfig">resetBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.resetDeploymentConfigs">resetDeploymentConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.resetSource">resetSource</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBuildConfig` <a name="putBuildConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putBuildConfig"></a>

```typescript
public putBuildConfig(value: PagesProjectBuildConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putBuildConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a>

---

##### `putDeploymentConfigs` <a name="putDeploymentConfigs" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putDeploymentConfigs"></a>

```typescript
public putDeploymentConfigs(value: PagesProjectDeploymentConfigs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putDeploymentConfigs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a>

---

##### `putSource` <a name="putSource" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putSource"></a>

```typescript
public putSource(value: PagesProjectSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a>

---

##### `resetBuildConfig` <a name="resetBuildConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.resetBuildConfig"></a>

```typescript
public resetBuildConfig(): void
```

##### `resetDeploymentConfigs` <a name="resetDeploymentConfigs" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.resetDeploymentConfigs"></a>

```typescript
public resetDeploymentConfigs(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.resetSource"></a>

```typescript
public resetSource(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PagesProject resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isConstruct"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

pagesProject.PagesProject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformElement"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

pagesProject.PagesProject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformResource"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

pagesProject.PagesProject.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.generateConfigForImport"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

pagesProject.PagesProject.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PagesProject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PagesProject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PagesProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PagesProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.buildConfig">buildConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference">PagesProjectBuildConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.deploymentConfigs">deploymentConfigs</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference">PagesProjectDeploymentConfigsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.source">source</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference">PagesProjectSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.subdomain">subdomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.buildConfigInput">buildConfigInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.deploymentConfigsInput">deploymentConfigsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.productionBranchInput">productionBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.productionBranch">productionBranch</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `buildConfig`<sup>Required</sup> <a name="buildConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.buildConfig"></a>

```typescript
public readonly buildConfig: PagesProjectBuildConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference">PagesProjectBuildConfigOutputReference</a>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `deploymentConfigs`<sup>Required</sup> <a name="deploymentConfigs" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.deploymentConfigs"></a>

```typescript
public readonly deploymentConfigs: PagesProjectDeploymentConfigsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference">PagesProjectDeploymentConfigsOutputReference</a>

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.source"></a>

```typescript
public readonly source: PagesProjectSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference">PagesProjectSourceOutputReference</a>

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.subdomain"></a>

```typescript
public readonly subdomain: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `buildConfigInput`<sup>Optional</sup> <a name="buildConfigInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.buildConfigInput"></a>

```typescript
public readonly buildConfigInput: PagesProjectBuildConfig;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a>

---

##### `deploymentConfigsInput`<sup>Optional</sup> <a name="deploymentConfigsInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.deploymentConfigsInput"></a>

```typescript
public readonly deploymentConfigsInput: PagesProjectDeploymentConfigs;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `productionBranchInput`<sup>Optional</sup> <a name="productionBranchInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.productionBranchInput"></a>

```typescript
public readonly productionBranchInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.sourceInput"></a>

```typescript
public readonly sourceInput: PagesProjectSource;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `productionBranch`<sup>Required</sup> <a name="productionBranch" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.productionBranch"></a>

```typescript
public readonly productionBranch: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PagesProjectBuildConfig <a name="PagesProjectBuildConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.Initializer"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

const pagesProjectBuildConfig: pagesProject.PagesProjectBuildConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.buildCaching">buildCaching</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable build caching for the project. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.buildCommand">buildCommand</a></code> | <code>string</code> | Command used to build project. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.destinationDir">destinationDir</a></code> | <code>string</code> | Output directory of the build. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.rootDir">rootDir</a></code> | <code>string</code> | Your project's root directory, where Cloudflare runs the build command. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.webAnalyticsTag">webAnalyticsTag</a></code> | <code>string</code> | The classifying tag for analytics. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.webAnalyticsToken">webAnalyticsToken</a></code> | <code>string</code> | The auth token for analytics. |

---

##### `buildCaching`<sup>Optional</sup> <a name="buildCaching" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.buildCaching"></a>

```typescript
public readonly buildCaching: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable build caching for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#build_caching PagesProject#build_caching}

---

##### `buildCommand`<sup>Optional</sup> <a name="buildCommand" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.buildCommand"></a>

```typescript
public readonly buildCommand: string;
```

- *Type:* string

Command used to build project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#build_command PagesProject#build_command}

---

##### `destinationDir`<sup>Optional</sup> <a name="destinationDir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.destinationDir"></a>

```typescript
public readonly destinationDir: string;
```

- *Type:* string

Output directory of the build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#destination_dir PagesProject#destination_dir}

---

##### `rootDir`<sup>Optional</sup> <a name="rootDir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.rootDir"></a>

```typescript
public readonly rootDir: string;
```

- *Type:* string

Your project's root directory, where Cloudflare runs the build command.

If your site is not in a subdirectory, leave this path value empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#root_dir PagesProject#root_dir}

---

##### `webAnalyticsTag`<sup>Optional</sup> <a name="webAnalyticsTag" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.webAnalyticsTag"></a>

```typescript
public readonly webAnalyticsTag: string;
```

- *Type:* string

The classifying tag for analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#web_analytics_tag PagesProject#web_analytics_tag}

---

##### `webAnalyticsToken`<sup>Optional</sup> <a name="webAnalyticsToken" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.webAnalyticsToken"></a>

```typescript
public readonly webAnalyticsToken: string;
```

- *Type:* string

The auth token for analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#web_analytics_token PagesProject#web_analytics_token}

---

### PagesProjectConfig <a name="PagesProjectConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.Initializer"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

const pagesProjectConfig: pagesProject.PagesProjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.accountId">accountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.name">name</a></code> | <code>string</code> | Name of the project. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.productionBranch">productionBranch</a></code> | <code>string</code> | The name of the branch that is used for the production environment. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.buildConfig">buildConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a></code> | build_config block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.deploymentConfigs">deploymentConfigs</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a></code> | deployment_configs block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#id PagesProject#id}. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a></code> | source block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#account_id PagesProject#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#name PagesProject#name}

---

##### `productionBranch`<sup>Required</sup> <a name="productionBranch" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.productionBranch"></a>

```typescript
public readonly productionBranch: string;
```

- *Type:* string

The name of the branch that is used for the production environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#production_branch PagesProject#production_branch}

---

##### `buildConfig`<sup>Optional</sup> <a name="buildConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.buildConfig"></a>

```typescript
public readonly buildConfig: PagesProjectBuildConfig;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a>

build_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#build_config PagesProject#build_config}

---

##### `deploymentConfigs`<sup>Optional</sup> <a name="deploymentConfigs" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.deploymentConfigs"></a>

```typescript
public readonly deploymentConfigs: PagesProjectDeploymentConfigs;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a>

deployment_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#deployment_configs PagesProject#deployment_configs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#id PagesProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.source"></a>

```typescript
public readonly source: PagesProjectSource;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#source PagesProject#source}

---

### PagesProjectDeploymentConfigs <a name="PagesProjectDeploymentConfigs" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs.Initializer"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

const pagesProjectDeploymentConfigs: pagesProject.PagesProjectDeploymentConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs.property.preview">preview</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a></code> | preview block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs.property.production">production</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a></code> | production block. |

---

##### `preview`<sup>Optional</sup> <a name="preview" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs.property.preview"></a>

```typescript
public readonly preview: PagesProjectDeploymentConfigsPreview;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a>

preview block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#preview PagesProject#preview}

---

##### `production`<sup>Optional</sup> <a name="production" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs.property.production"></a>

```typescript
public readonly production: PagesProjectDeploymentConfigsProduction;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a>

production block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#production PagesProject#production}

---

### PagesProjectDeploymentConfigsPreview <a name="PagesProjectDeploymentConfigsPreview" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.Initializer"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

const pagesProjectDeploymentConfigsPreview: pagesProject.PagesProjectDeploymentConfigsPreview = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.alwaysUseLatestCompatibilityDate">alwaysUseLatestCompatibilityDate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use latest compatibility date for Pages Functions. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.compatibilityDate">compatibilityDate</a></code> | <code>string</code> | Compatibility date used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.compatibilityFlags">compatibilityFlags</a></code> | <code>string[]</code> | Compatibility flags used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.d1Databases">d1Databases</a></code> | <code>{[ key: string ]: string}</code> | D1 Databases used for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.durableObjectNamespaces">durableObjectNamespaces</a></code> | <code>{[ key: string ]: string}</code> | Durable Object namespaces used for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Environment variables for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.failOpen">failOpen</a></code> | <code>boolean \| cdktf.IResolvable</code> | Fail open used for Pages Functions. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.kvNamespaces">kvNamespaces</a></code> | <code>{[ key: string ]: string}</code> | KV namespaces used for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a></code> | placement block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.r2Buckets">r2Buckets</a></code> | <code>{[ key: string ]: string}</code> | R2 Buckets used for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.secrets">secrets</a></code> | <code>{[ key: string ]: string}</code> | Encrypted environment variables for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.serviceBinding">serviceBinding</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a>[]</code> | service_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.usageModel">usageModel</a></code> | <code>string</code> | Usage model used for Pages Functions. Available values: `unbound`, `bundled`, `standard`. Defaults to `bundled`. |

---

##### `alwaysUseLatestCompatibilityDate`<sup>Optional</sup> <a name="alwaysUseLatestCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.alwaysUseLatestCompatibilityDate"></a>

```typescript
public readonly alwaysUseLatestCompatibilityDate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use latest compatibility date for Pages Functions. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#always_use_latest_compatibility_date PagesProject#always_use_latest_compatibility_date}

---

##### `compatibilityDate`<sup>Optional</sup> <a name="compatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.compatibilityDate"></a>

```typescript
public readonly compatibilityDate: string;
```

- *Type:* string

Compatibility date used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#compatibility_date PagesProject#compatibility_date}

---

##### `compatibilityFlags`<sup>Optional</sup> <a name="compatibilityFlags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.compatibilityFlags"></a>

```typescript
public readonly compatibilityFlags: string[];
```

- *Type:* string[]

Compatibility flags used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#compatibility_flags PagesProject#compatibility_flags}

---

##### `d1Databases`<sup>Optional</sup> <a name="d1Databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.d1Databases"></a>

```typescript
public readonly d1Databases: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

D1 Databases used for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#d1_databases PagesProject#d1_databases}

---

##### `durableObjectNamespaces`<sup>Optional</sup> <a name="durableObjectNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.durableObjectNamespaces"></a>

```typescript
public readonly durableObjectNamespaces: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Durable Object namespaces used for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#durable_object_namespaces PagesProject#durable_object_namespaces}

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Environment variables for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#environment_variables PagesProject#environment_variables}

---

##### `failOpen`<sup>Optional</sup> <a name="failOpen" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.failOpen"></a>

```typescript
public readonly failOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Fail open used for Pages Functions. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#fail_open PagesProject#fail_open}

---

##### `kvNamespaces`<sup>Optional</sup> <a name="kvNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.kvNamespaces"></a>

```typescript
public readonly kvNamespaces: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

KV namespaces used for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#kv_namespaces PagesProject#kv_namespaces}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.placement"></a>

```typescript
public readonly placement: PagesProjectDeploymentConfigsPreviewPlacement;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#placement PagesProject#placement}

---

##### `r2Buckets`<sup>Optional</sup> <a name="r2Buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.r2Buckets"></a>

```typescript
public readonly r2Buckets: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

R2 Buckets used for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#r2_buckets PagesProject#r2_buckets}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.secrets"></a>

```typescript
public readonly secrets: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Encrypted environment variables for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#secrets PagesProject#secrets}

---

##### `serviceBinding`<sup>Optional</sup> <a name="serviceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.serviceBinding"></a>

```typescript
public readonly serviceBinding: IResolvable | PagesProjectDeploymentConfigsPreviewServiceBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a>[]

service_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#service_binding PagesProject#service_binding}

---

##### `usageModel`<sup>Optional</sup> <a name="usageModel" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.usageModel"></a>

```typescript
public readonly usageModel: string;
```

- *Type:* string

Usage model used for Pages Functions. Available values: `unbound`, `bundled`, `standard`. Defaults to `bundled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#usage_model PagesProject#usage_model}

---

### PagesProjectDeploymentConfigsPreviewPlacement <a name="PagesProjectDeploymentConfigsPreviewPlacement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement.Initializer"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

const pagesProjectDeploymentConfigsPreviewPlacement: pagesProject.PagesProjectDeploymentConfigsPreviewPlacement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement.property.mode">mode</a></code> | <code>string</code> | Placement Mode for the Pages Function. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Placement Mode for the Pages Function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#mode PagesProject#mode}

---

### PagesProjectDeploymentConfigsPreviewServiceBinding <a name="PagesProjectDeploymentConfigsPreviewServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.Initializer"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

const pagesProjectDeploymentConfigsPreviewServiceBinding: pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.name">name</a></code> | <code>string</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.service">service</a></code> | <code>string</code> | The name of the Worker to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.environment">environment</a></code> | <code>string</code> | The name of the Worker environment to bind to. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#name PagesProject#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The name of the Worker to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#service PagesProject#service}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The name of the Worker environment to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#environment PagesProject#environment}

---

### PagesProjectDeploymentConfigsProduction <a name="PagesProjectDeploymentConfigsProduction" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.Initializer"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

const pagesProjectDeploymentConfigsProduction: pagesProject.PagesProjectDeploymentConfigsProduction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.alwaysUseLatestCompatibilityDate">alwaysUseLatestCompatibilityDate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use latest compatibility date for Pages Functions. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.compatibilityDate">compatibilityDate</a></code> | <code>string</code> | Compatibility date used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.compatibilityFlags">compatibilityFlags</a></code> | <code>string[]</code> | Compatibility flags used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.d1Databases">d1Databases</a></code> | <code>{[ key: string ]: string}</code> | D1 Databases used for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.durableObjectNamespaces">durableObjectNamespaces</a></code> | <code>{[ key: string ]: string}</code> | Durable Object namespaces used for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Environment variables for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.failOpen">failOpen</a></code> | <code>boolean \| cdktf.IResolvable</code> | Fail open used for Pages Functions. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.kvNamespaces">kvNamespaces</a></code> | <code>{[ key: string ]: string}</code> | KV namespaces used for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a></code> | placement block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.r2Buckets">r2Buckets</a></code> | <code>{[ key: string ]: string}</code> | R2 Buckets used for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.secrets">secrets</a></code> | <code>{[ key: string ]: string}</code> | Encrypted environment variables for Pages Functions. Defaults to `map[]`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.serviceBinding">serviceBinding</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a>[]</code> | service_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.usageModel">usageModel</a></code> | <code>string</code> | Usage model used for Pages Functions. Available values: `unbound`, `bundled`, `standard`. Defaults to `bundled`. |

---

##### `alwaysUseLatestCompatibilityDate`<sup>Optional</sup> <a name="alwaysUseLatestCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.alwaysUseLatestCompatibilityDate"></a>

```typescript
public readonly alwaysUseLatestCompatibilityDate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use latest compatibility date for Pages Functions. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#always_use_latest_compatibility_date PagesProject#always_use_latest_compatibility_date}

---

##### `compatibilityDate`<sup>Optional</sup> <a name="compatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.compatibilityDate"></a>

```typescript
public readonly compatibilityDate: string;
```

- *Type:* string

Compatibility date used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#compatibility_date PagesProject#compatibility_date}

---

##### `compatibilityFlags`<sup>Optional</sup> <a name="compatibilityFlags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.compatibilityFlags"></a>

```typescript
public readonly compatibilityFlags: string[];
```

- *Type:* string[]

Compatibility flags used for Pages Functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#compatibility_flags PagesProject#compatibility_flags}

---

##### `d1Databases`<sup>Optional</sup> <a name="d1Databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.d1Databases"></a>

```typescript
public readonly d1Databases: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

D1 Databases used for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#d1_databases PagesProject#d1_databases}

---

##### `durableObjectNamespaces`<sup>Optional</sup> <a name="durableObjectNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.durableObjectNamespaces"></a>

```typescript
public readonly durableObjectNamespaces: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Durable Object namespaces used for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#durable_object_namespaces PagesProject#durable_object_namespaces}

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Environment variables for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#environment_variables PagesProject#environment_variables}

---

##### `failOpen`<sup>Optional</sup> <a name="failOpen" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.failOpen"></a>

```typescript
public readonly failOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Fail open used for Pages Functions. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#fail_open PagesProject#fail_open}

---

##### `kvNamespaces`<sup>Optional</sup> <a name="kvNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.kvNamespaces"></a>

```typescript
public readonly kvNamespaces: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

KV namespaces used for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#kv_namespaces PagesProject#kv_namespaces}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.placement"></a>

```typescript
public readonly placement: PagesProjectDeploymentConfigsProductionPlacement;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#placement PagesProject#placement}

---

##### `r2Buckets`<sup>Optional</sup> <a name="r2Buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.r2Buckets"></a>

```typescript
public readonly r2Buckets: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

R2 Buckets used for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#r2_buckets PagesProject#r2_buckets}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.secrets"></a>

```typescript
public readonly secrets: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Encrypted environment variables for Pages Functions. Defaults to `map[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#secrets PagesProject#secrets}

---

##### `serviceBinding`<sup>Optional</sup> <a name="serviceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.serviceBinding"></a>

```typescript
public readonly serviceBinding: IResolvable | PagesProjectDeploymentConfigsProductionServiceBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a>[]

service_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#service_binding PagesProject#service_binding}

---

##### `usageModel`<sup>Optional</sup> <a name="usageModel" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.usageModel"></a>

```typescript
public readonly usageModel: string;
```

- *Type:* string

Usage model used for Pages Functions. Available values: `unbound`, `bundled`, `standard`. Defaults to `bundled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#usage_model PagesProject#usage_model}

---

### PagesProjectDeploymentConfigsProductionPlacement <a name="PagesProjectDeploymentConfigsProductionPlacement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement.Initializer"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

const pagesProjectDeploymentConfigsProductionPlacement: pagesProject.PagesProjectDeploymentConfigsProductionPlacement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement.property.mode">mode</a></code> | <code>string</code> | Placement Mode for the Pages Function. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Placement Mode for the Pages Function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#mode PagesProject#mode}

---

### PagesProjectDeploymentConfigsProductionServiceBinding <a name="PagesProjectDeploymentConfigsProductionServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.Initializer"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

const pagesProjectDeploymentConfigsProductionServiceBinding: pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.name">name</a></code> | <code>string</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.service">service</a></code> | <code>string</code> | The name of the Worker to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.environment">environment</a></code> | <code>string</code> | The name of the Worker environment to bind to. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#name PagesProject#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The name of the Worker to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#service PagesProject#service}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The name of the Worker environment to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#environment PagesProject#environment}

---

### PagesProjectSource <a name="PagesProjectSource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSource.Initializer"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

const pagesProjectSource: pagesProject.PagesProjectSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource.property.type">type</a></code> | <code>string</code> | Project host type. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSource.property.config"></a>

```typescript
public readonly config: PagesProjectSourceConfig;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#config PagesProject#config}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Project host type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#type PagesProject#type}

---

### PagesProjectSourceConfig <a name="PagesProjectSourceConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.Initializer"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

const pagesProjectSourceConfig: pagesProject.PagesProjectSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.productionBranch">productionBranch</a></code> | <code>string</code> | Project production branch name. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.deploymentsEnabled">deploymentsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Toggle deployments on this repo. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.owner">owner</a></code> | <code>string</code> | Project owner username. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.prCommentsEnabled">prCommentsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable Pages to comment on Pull Requests. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewBranchExcludes">previewBranchExcludes</a></code> | <code>string[]</code> | Branches will be excluded from automatic deployment. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewBranchIncludes">previewBranchIncludes</a></code> | <code>string[]</code> | Branches will be included for automatic deployment. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewDeploymentSetting">previewDeploymentSetting</a></code> | <code>string</code> | Preview Deployment Setting. Available values: `custom`, `all`, `none`. Defaults to `all`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.productionDeploymentEnabled">productionDeploymentEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable production deployments. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.repoName">repoName</a></code> | <code>string</code> | Project repository name. **Modifying this attribute will force creation of a new resource.**. |

---

##### `productionBranch`<sup>Required</sup> <a name="productionBranch" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.productionBranch"></a>

```typescript
public readonly productionBranch: string;
```

- *Type:* string

Project production branch name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#production_branch PagesProject#production_branch}

---

##### `deploymentsEnabled`<sup>Optional</sup> <a name="deploymentsEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.deploymentsEnabled"></a>

```typescript
public readonly deploymentsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Toggle deployments on this repo. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#deployments_enabled PagesProject#deployments_enabled}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Project owner username. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#owner PagesProject#owner}

---

##### `prCommentsEnabled`<sup>Optional</sup> <a name="prCommentsEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.prCommentsEnabled"></a>

```typescript
public readonly prCommentsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable Pages to comment on Pull Requests. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#pr_comments_enabled PagesProject#pr_comments_enabled}

---

##### `previewBranchExcludes`<sup>Optional</sup> <a name="previewBranchExcludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewBranchExcludes"></a>

```typescript
public readonly previewBranchExcludes: string[];
```

- *Type:* string[]

Branches will be excluded from automatic deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#preview_branch_excludes PagesProject#preview_branch_excludes}

---

##### `previewBranchIncludes`<sup>Optional</sup> <a name="previewBranchIncludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewBranchIncludes"></a>

```typescript
public readonly previewBranchIncludes: string[];
```

- *Type:* string[]

Branches will be included for automatic deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#preview_branch_includes PagesProject#preview_branch_includes}

---

##### `previewDeploymentSetting`<sup>Optional</sup> <a name="previewDeploymentSetting" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewDeploymentSetting"></a>

```typescript
public readonly previewDeploymentSetting: string;
```

- *Type:* string

Preview Deployment Setting. Available values: `custom`, `all`, `none`. Defaults to `all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#preview_deployment_setting PagesProject#preview_deployment_setting}

---

##### `productionDeploymentEnabled`<sup>Optional</sup> <a name="productionDeploymentEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.productionDeploymentEnabled"></a>

```typescript
public readonly productionDeploymentEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable production deployments. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#production_deployment_enabled PagesProject#production_deployment_enabled}

---

##### `repoName`<sup>Optional</sup> <a name="repoName" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.repoName"></a>

```typescript
public readonly repoName: string;
```

- *Type:* string

Project repository name. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.31.0/docs/resources/pages_project#repo_name PagesProject#repo_name}

---

## Classes <a name="Classes" id="Classes"></a>

### PagesProjectBuildConfigOutputReference <a name="PagesProjectBuildConfigOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.Initializer"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

new pagesProject.PagesProjectBuildConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetBuildCaching">resetBuildCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetBuildCommand">resetBuildCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetDestinationDir">resetDestinationDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetRootDir">resetRootDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetWebAnalyticsTag">resetWebAnalyticsTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetWebAnalyticsToken">resetWebAnalyticsToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBuildCaching` <a name="resetBuildCaching" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetBuildCaching"></a>

```typescript
public resetBuildCaching(): void
```

##### `resetBuildCommand` <a name="resetBuildCommand" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetBuildCommand"></a>

```typescript
public resetBuildCommand(): void
```

##### `resetDestinationDir` <a name="resetDestinationDir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetDestinationDir"></a>

```typescript
public resetDestinationDir(): void
```

##### `resetRootDir` <a name="resetRootDir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetRootDir"></a>

```typescript
public resetRootDir(): void
```

##### `resetWebAnalyticsTag` <a name="resetWebAnalyticsTag" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetWebAnalyticsTag"></a>

```typescript
public resetWebAnalyticsTag(): void
```

##### `resetWebAnalyticsToken` <a name="resetWebAnalyticsToken" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetWebAnalyticsToken"></a>

```typescript
public resetWebAnalyticsToken(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCachingInput">buildCachingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCommandInput">buildCommandInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.destinationDirInput">destinationDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.rootDirInput">rootDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTagInput">webAnalyticsTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTokenInput">webAnalyticsTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCaching">buildCaching</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCommand">buildCommand</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.destinationDir">destinationDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.rootDir">rootDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTag">webAnalyticsTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsToken">webAnalyticsToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buildCachingInput`<sup>Optional</sup> <a name="buildCachingInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCachingInput"></a>

```typescript
public readonly buildCachingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `buildCommandInput`<sup>Optional</sup> <a name="buildCommandInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCommandInput"></a>

```typescript
public readonly buildCommandInput: string;
```

- *Type:* string

---

##### `destinationDirInput`<sup>Optional</sup> <a name="destinationDirInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.destinationDirInput"></a>

```typescript
public readonly destinationDirInput: string;
```

- *Type:* string

---

##### `rootDirInput`<sup>Optional</sup> <a name="rootDirInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.rootDirInput"></a>

```typescript
public readonly rootDirInput: string;
```

- *Type:* string

---

##### `webAnalyticsTagInput`<sup>Optional</sup> <a name="webAnalyticsTagInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTagInput"></a>

```typescript
public readonly webAnalyticsTagInput: string;
```

- *Type:* string

---

##### `webAnalyticsTokenInput`<sup>Optional</sup> <a name="webAnalyticsTokenInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTokenInput"></a>

```typescript
public readonly webAnalyticsTokenInput: string;
```

- *Type:* string

---

##### `buildCaching`<sup>Required</sup> <a name="buildCaching" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCaching"></a>

```typescript
public readonly buildCaching: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `buildCommand`<sup>Required</sup> <a name="buildCommand" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCommand"></a>

```typescript
public readonly buildCommand: string;
```

- *Type:* string

---

##### `destinationDir`<sup>Required</sup> <a name="destinationDir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.destinationDir"></a>

```typescript
public readonly destinationDir: string;
```

- *Type:* string

---

##### `rootDir`<sup>Required</sup> <a name="rootDir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.rootDir"></a>

```typescript
public readonly rootDir: string;
```

- *Type:* string

---

##### `webAnalyticsTag`<sup>Required</sup> <a name="webAnalyticsTag" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTag"></a>

```typescript
public readonly webAnalyticsTag: string;
```

- *Type:* string

---

##### `webAnalyticsToken`<sup>Required</sup> <a name="webAnalyticsToken" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsToken"></a>

```typescript
public readonly webAnalyticsToken: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PagesProjectBuildConfig;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a>

---


### PagesProjectDeploymentConfigsOutputReference <a name="PagesProjectDeploymentConfigsOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.Initializer"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

new pagesProject.PagesProjectDeploymentConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putPreview">putPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putProduction">putProduction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.resetPreview">resetPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.resetProduction">resetProduction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPreview` <a name="putPreview" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putPreview"></a>

```typescript
public putPreview(value: PagesProjectDeploymentConfigsPreview): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putPreview.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a>

---

##### `putProduction` <a name="putProduction" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putProduction"></a>

```typescript
public putProduction(value: PagesProjectDeploymentConfigsProduction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putProduction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a>

---

##### `resetPreview` <a name="resetPreview" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.resetPreview"></a>

```typescript
public resetPreview(): void
```

##### `resetProduction` <a name="resetProduction" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.resetProduction"></a>

```typescript
public resetProduction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.preview">preview</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference">PagesProjectDeploymentConfigsPreviewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.production">production</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference">PagesProjectDeploymentConfigsProductionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.previewInput">previewInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.productionInput">productionInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.preview"></a>

```typescript
public readonly preview: PagesProjectDeploymentConfigsPreviewOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference">PagesProjectDeploymentConfigsPreviewOutputReference</a>

---

##### `production`<sup>Required</sup> <a name="production" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.production"></a>

```typescript
public readonly production: PagesProjectDeploymentConfigsProductionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference">PagesProjectDeploymentConfigsProductionOutputReference</a>

---

##### `previewInput`<sup>Optional</sup> <a name="previewInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.previewInput"></a>

```typescript
public readonly previewInput: PagesProjectDeploymentConfigsPreview;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a>

---

##### `productionInput`<sup>Optional</sup> <a name="productionInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.productionInput"></a>

```typescript
public readonly productionInput: PagesProjectDeploymentConfigsProduction;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PagesProjectDeploymentConfigs;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a>

---


### PagesProjectDeploymentConfigsPreviewOutputReference <a name="PagesProjectDeploymentConfigsPreviewOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.Initializer"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

new pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.putPlacement">putPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.putServiceBinding">putServiceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetAlwaysUseLatestCompatibilityDate">resetAlwaysUseLatestCompatibilityDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetCompatibilityDate">resetCompatibilityDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetCompatibilityFlags">resetCompatibilityFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetD1Databases">resetD1Databases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetDurableObjectNamespaces">resetDurableObjectNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetFailOpen">resetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetKvNamespaces">resetKvNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetPlacement">resetPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetR2Buckets">resetR2Buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetSecrets">resetSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetServiceBinding">resetServiceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetUsageModel">resetUsageModel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPlacement` <a name="putPlacement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.putPlacement"></a>

```typescript
public putPlacement(value: PagesProjectDeploymentConfigsPreviewPlacement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a>

---

##### `putServiceBinding` <a name="putServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.putServiceBinding"></a>

```typescript
public putServiceBinding(value: IResolvable | PagesProjectDeploymentConfigsPreviewServiceBinding[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.putServiceBinding.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a>[]

---

##### `resetAlwaysUseLatestCompatibilityDate` <a name="resetAlwaysUseLatestCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetAlwaysUseLatestCompatibilityDate"></a>

```typescript
public resetAlwaysUseLatestCompatibilityDate(): void
```

##### `resetCompatibilityDate` <a name="resetCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetCompatibilityDate"></a>

```typescript
public resetCompatibilityDate(): void
```

##### `resetCompatibilityFlags` <a name="resetCompatibilityFlags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetCompatibilityFlags"></a>

```typescript
public resetCompatibilityFlags(): void
```

##### `resetD1Databases` <a name="resetD1Databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetD1Databases"></a>

```typescript
public resetD1Databases(): void
```

##### `resetDurableObjectNamespaces` <a name="resetDurableObjectNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetDurableObjectNamespaces"></a>

```typescript
public resetDurableObjectNamespaces(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetFailOpen` <a name="resetFailOpen" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetFailOpen"></a>

```typescript
public resetFailOpen(): void
```

##### `resetKvNamespaces` <a name="resetKvNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetKvNamespaces"></a>

```typescript
public resetKvNamespaces(): void
```

##### `resetPlacement` <a name="resetPlacement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetPlacement"></a>

```typescript
public resetPlacement(): void
```

##### `resetR2Buckets` <a name="resetR2Buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetR2Buckets"></a>

```typescript
public resetR2Buckets(): void
```

##### `resetSecrets` <a name="resetSecrets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetSecrets"></a>

```typescript
public resetSecrets(): void
```

##### `resetServiceBinding` <a name="resetServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetServiceBinding"></a>

```typescript
public resetServiceBinding(): void
```

##### `resetUsageModel` <a name="resetUsageModel" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetUsageModel"></a>

```typescript
public resetUsageModel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference">PagesProjectDeploymentConfigsPreviewPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.serviceBinding">serviceBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList">PagesProjectDeploymentConfigsPreviewServiceBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.alwaysUseLatestCompatibilityDateInput">alwaysUseLatestCompatibilityDateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityDateInput">compatibilityDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityFlagsInput">compatibilityFlagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.d1DatabasesInput">d1DatabasesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.durableObjectNamespacesInput">durableObjectNamespacesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.failOpenInput">failOpenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.kvNamespacesInput">kvNamespacesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.placementInput">placementInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.r2BucketsInput">r2BucketsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.secretsInput">secretsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.serviceBindingInput">serviceBindingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.usageModelInput">usageModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.alwaysUseLatestCompatibilityDate">alwaysUseLatestCompatibilityDate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityDate">compatibilityDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityFlags">compatibilityFlags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.d1Databases">d1Databases</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.durableObjectNamespaces">durableObjectNamespaces</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.failOpen">failOpen</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.kvNamespaces">kvNamespaces</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.r2Buckets">r2Buckets</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.secrets">secrets</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.usageModel">usageModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.placement"></a>

```typescript
public readonly placement: PagesProjectDeploymentConfigsPreviewPlacementOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference">PagesProjectDeploymentConfigsPreviewPlacementOutputReference</a>

---

##### `serviceBinding`<sup>Required</sup> <a name="serviceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.serviceBinding"></a>

```typescript
public readonly serviceBinding: PagesProjectDeploymentConfigsPreviewServiceBindingList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList">PagesProjectDeploymentConfigsPreviewServiceBindingList</a>

---

##### `alwaysUseLatestCompatibilityDateInput`<sup>Optional</sup> <a name="alwaysUseLatestCompatibilityDateInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.alwaysUseLatestCompatibilityDateInput"></a>

```typescript
public readonly alwaysUseLatestCompatibilityDateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `compatibilityDateInput`<sup>Optional</sup> <a name="compatibilityDateInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityDateInput"></a>

```typescript
public readonly compatibilityDateInput: string;
```

- *Type:* string

---

##### `compatibilityFlagsInput`<sup>Optional</sup> <a name="compatibilityFlagsInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityFlagsInput"></a>

```typescript
public readonly compatibilityFlagsInput: string[];
```

- *Type:* string[]

---

##### `d1DatabasesInput`<sup>Optional</sup> <a name="d1DatabasesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.d1DatabasesInput"></a>

```typescript
public readonly d1DatabasesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `durableObjectNamespacesInput`<sup>Optional</sup> <a name="durableObjectNamespacesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.durableObjectNamespacesInput"></a>

```typescript
public readonly durableObjectNamespacesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `failOpenInput`<sup>Optional</sup> <a name="failOpenInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.failOpenInput"></a>

```typescript
public readonly failOpenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kvNamespacesInput`<sup>Optional</sup> <a name="kvNamespacesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.kvNamespacesInput"></a>

```typescript
public readonly kvNamespacesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `placementInput`<sup>Optional</sup> <a name="placementInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.placementInput"></a>

```typescript
public readonly placementInput: PagesProjectDeploymentConfigsPreviewPlacement;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a>

---

##### `r2BucketsInput`<sup>Optional</sup> <a name="r2BucketsInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.r2BucketsInput"></a>

```typescript
public readonly r2BucketsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `secretsInput`<sup>Optional</sup> <a name="secretsInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.secretsInput"></a>

```typescript
public readonly secretsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `serviceBindingInput`<sup>Optional</sup> <a name="serviceBindingInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.serviceBindingInput"></a>

```typescript
public readonly serviceBindingInput: IResolvable | PagesProjectDeploymentConfigsPreviewServiceBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a>[]

---

##### `usageModelInput`<sup>Optional</sup> <a name="usageModelInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.usageModelInput"></a>

```typescript
public readonly usageModelInput: string;
```

- *Type:* string

---

##### `alwaysUseLatestCompatibilityDate`<sup>Required</sup> <a name="alwaysUseLatestCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.alwaysUseLatestCompatibilityDate"></a>

```typescript
public readonly alwaysUseLatestCompatibilityDate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `compatibilityDate`<sup>Required</sup> <a name="compatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityDate"></a>

```typescript
public readonly compatibilityDate: string;
```

- *Type:* string

---

##### `compatibilityFlags`<sup>Required</sup> <a name="compatibilityFlags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityFlags"></a>

```typescript
public readonly compatibilityFlags: string[];
```

- *Type:* string[]

---

##### `d1Databases`<sup>Required</sup> <a name="d1Databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.d1Databases"></a>

```typescript
public readonly d1Databases: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `durableObjectNamespaces`<sup>Required</sup> <a name="durableObjectNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.durableObjectNamespaces"></a>

```typescript
public readonly durableObjectNamespaces: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `failOpen`<sup>Required</sup> <a name="failOpen" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.failOpen"></a>

```typescript
public readonly failOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kvNamespaces`<sup>Required</sup> <a name="kvNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.kvNamespaces"></a>

```typescript
public readonly kvNamespaces: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `r2Buckets`<sup>Required</sup> <a name="r2Buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.r2Buckets"></a>

```typescript
public readonly r2Buckets: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.secrets"></a>

```typescript
public readonly secrets: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `usageModel`<sup>Required</sup> <a name="usageModel" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.usageModel"></a>

```typescript
public readonly usageModel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PagesProjectDeploymentConfigsPreview;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a>

---


### PagesProjectDeploymentConfigsPreviewPlacementOutputReference <a name="PagesProjectDeploymentConfigsPreviewPlacementOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.Initializer"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

new pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PagesProjectDeploymentConfigsPreviewPlacement;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewPlacement">PagesProjectDeploymentConfigsPreviewPlacement</a>

---


### PagesProjectDeploymentConfigsPreviewServiceBindingList <a name="PagesProjectDeploymentConfigsPreviewServiceBindingList" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

new pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.get"></a>

```typescript
public get(index: number): PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PagesProjectDeploymentConfigsPreviewServiceBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a>[]

---


### PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference <a name="PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

new pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PagesProjectDeploymentConfigsPreviewServiceBinding;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding">PagesProjectDeploymentConfigsPreviewServiceBinding</a>

---


### PagesProjectDeploymentConfigsProductionOutputReference <a name="PagesProjectDeploymentConfigsProductionOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.Initializer"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

new pagesProject.PagesProjectDeploymentConfigsProductionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.putPlacement">putPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.putServiceBinding">putServiceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetAlwaysUseLatestCompatibilityDate">resetAlwaysUseLatestCompatibilityDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetCompatibilityDate">resetCompatibilityDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetCompatibilityFlags">resetCompatibilityFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetD1Databases">resetD1Databases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetDurableObjectNamespaces">resetDurableObjectNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetFailOpen">resetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetKvNamespaces">resetKvNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetPlacement">resetPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetR2Buckets">resetR2Buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetSecrets">resetSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetServiceBinding">resetServiceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetUsageModel">resetUsageModel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPlacement` <a name="putPlacement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.putPlacement"></a>

```typescript
public putPlacement(value: PagesProjectDeploymentConfigsProductionPlacement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a>

---

##### `putServiceBinding` <a name="putServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.putServiceBinding"></a>

```typescript
public putServiceBinding(value: IResolvable | PagesProjectDeploymentConfigsProductionServiceBinding[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.putServiceBinding.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a>[]

---

##### `resetAlwaysUseLatestCompatibilityDate` <a name="resetAlwaysUseLatestCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetAlwaysUseLatestCompatibilityDate"></a>

```typescript
public resetAlwaysUseLatestCompatibilityDate(): void
```

##### `resetCompatibilityDate` <a name="resetCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetCompatibilityDate"></a>

```typescript
public resetCompatibilityDate(): void
```

##### `resetCompatibilityFlags` <a name="resetCompatibilityFlags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetCompatibilityFlags"></a>

```typescript
public resetCompatibilityFlags(): void
```

##### `resetD1Databases` <a name="resetD1Databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetD1Databases"></a>

```typescript
public resetD1Databases(): void
```

##### `resetDurableObjectNamespaces` <a name="resetDurableObjectNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetDurableObjectNamespaces"></a>

```typescript
public resetDurableObjectNamespaces(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetFailOpen` <a name="resetFailOpen" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetFailOpen"></a>

```typescript
public resetFailOpen(): void
```

##### `resetKvNamespaces` <a name="resetKvNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetKvNamespaces"></a>

```typescript
public resetKvNamespaces(): void
```

##### `resetPlacement` <a name="resetPlacement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetPlacement"></a>

```typescript
public resetPlacement(): void
```

##### `resetR2Buckets` <a name="resetR2Buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetR2Buckets"></a>

```typescript
public resetR2Buckets(): void
```

##### `resetSecrets` <a name="resetSecrets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetSecrets"></a>

```typescript
public resetSecrets(): void
```

##### `resetServiceBinding` <a name="resetServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetServiceBinding"></a>

```typescript
public resetServiceBinding(): void
```

##### `resetUsageModel` <a name="resetUsageModel" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetUsageModel"></a>

```typescript
public resetUsageModel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference">PagesProjectDeploymentConfigsProductionPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.serviceBinding">serviceBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList">PagesProjectDeploymentConfigsProductionServiceBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.alwaysUseLatestCompatibilityDateInput">alwaysUseLatestCompatibilityDateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityDateInput">compatibilityDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityFlagsInput">compatibilityFlagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.d1DatabasesInput">d1DatabasesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.durableObjectNamespacesInput">durableObjectNamespacesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.failOpenInput">failOpenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.kvNamespacesInput">kvNamespacesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.placementInput">placementInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.r2BucketsInput">r2BucketsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.secretsInput">secretsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.serviceBindingInput">serviceBindingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.usageModelInput">usageModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.alwaysUseLatestCompatibilityDate">alwaysUseLatestCompatibilityDate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityDate">compatibilityDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityFlags">compatibilityFlags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.d1Databases">d1Databases</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.durableObjectNamespaces">durableObjectNamespaces</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.failOpen">failOpen</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.kvNamespaces">kvNamespaces</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.r2Buckets">r2Buckets</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.secrets">secrets</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.usageModel">usageModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.placement"></a>

```typescript
public readonly placement: PagesProjectDeploymentConfigsProductionPlacementOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference">PagesProjectDeploymentConfigsProductionPlacementOutputReference</a>

---

##### `serviceBinding`<sup>Required</sup> <a name="serviceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.serviceBinding"></a>

```typescript
public readonly serviceBinding: PagesProjectDeploymentConfigsProductionServiceBindingList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList">PagesProjectDeploymentConfigsProductionServiceBindingList</a>

---

##### `alwaysUseLatestCompatibilityDateInput`<sup>Optional</sup> <a name="alwaysUseLatestCompatibilityDateInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.alwaysUseLatestCompatibilityDateInput"></a>

```typescript
public readonly alwaysUseLatestCompatibilityDateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `compatibilityDateInput`<sup>Optional</sup> <a name="compatibilityDateInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityDateInput"></a>

```typescript
public readonly compatibilityDateInput: string;
```

- *Type:* string

---

##### `compatibilityFlagsInput`<sup>Optional</sup> <a name="compatibilityFlagsInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityFlagsInput"></a>

```typescript
public readonly compatibilityFlagsInput: string[];
```

- *Type:* string[]

---

##### `d1DatabasesInput`<sup>Optional</sup> <a name="d1DatabasesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.d1DatabasesInput"></a>

```typescript
public readonly d1DatabasesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `durableObjectNamespacesInput`<sup>Optional</sup> <a name="durableObjectNamespacesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.durableObjectNamespacesInput"></a>

```typescript
public readonly durableObjectNamespacesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `failOpenInput`<sup>Optional</sup> <a name="failOpenInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.failOpenInput"></a>

```typescript
public readonly failOpenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kvNamespacesInput`<sup>Optional</sup> <a name="kvNamespacesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.kvNamespacesInput"></a>

```typescript
public readonly kvNamespacesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `placementInput`<sup>Optional</sup> <a name="placementInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.placementInput"></a>

```typescript
public readonly placementInput: PagesProjectDeploymentConfigsProductionPlacement;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a>

---

##### `r2BucketsInput`<sup>Optional</sup> <a name="r2BucketsInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.r2BucketsInput"></a>

```typescript
public readonly r2BucketsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `secretsInput`<sup>Optional</sup> <a name="secretsInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.secretsInput"></a>

```typescript
public readonly secretsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `serviceBindingInput`<sup>Optional</sup> <a name="serviceBindingInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.serviceBindingInput"></a>

```typescript
public readonly serviceBindingInput: IResolvable | PagesProjectDeploymentConfigsProductionServiceBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a>[]

---

##### `usageModelInput`<sup>Optional</sup> <a name="usageModelInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.usageModelInput"></a>

```typescript
public readonly usageModelInput: string;
```

- *Type:* string

---

##### `alwaysUseLatestCompatibilityDate`<sup>Required</sup> <a name="alwaysUseLatestCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.alwaysUseLatestCompatibilityDate"></a>

```typescript
public readonly alwaysUseLatestCompatibilityDate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `compatibilityDate`<sup>Required</sup> <a name="compatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityDate"></a>

```typescript
public readonly compatibilityDate: string;
```

- *Type:* string

---

##### `compatibilityFlags`<sup>Required</sup> <a name="compatibilityFlags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityFlags"></a>

```typescript
public readonly compatibilityFlags: string[];
```

- *Type:* string[]

---

##### `d1Databases`<sup>Required</sup> <a name="d1Databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.d1Databases"></a>

```typescript
public readonly d1Databases: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `durableObjectNamespaces`<sup>Required</sup> <a name="durableObjectNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.durableObjectNamespaces"></a>

```typescript
public readonly durableObjectNamespaces: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `failOpen`<sup>Required</sup> <a name="failOpen" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.failOpen"></a>

```typescript
public readonly failOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kvNamespaces`<sup>Required</sup> <a name="kvNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.kvNamespaces"></a>

```typescript
public readonly kvNamespaces: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `r2Buckets`<sup>Required</sup> <a name="r2Buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.r2Buckets"></a>

```typescript
public readonly r2Buckets: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.secrets"></a>

```typescript
public readonly secrets: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `usageModel`<sup>Required</sup> <a name="usageModel" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.usageModel"></a>

```typescript
public readonly usageModel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PagesProjectDeploymentConfigsProduction;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a>

---


### PagesProjectDeploymentConfigsProductionPlacementOutputReference <a name="PagesProjectDeploymentConfigsProductionPlacementOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.Initializer"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

new pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PagesProjectDeploymentConfigsProductionPlacement;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionPlacement">PagesProjectDeploymentConfigsProductionPlacement</a>

---


### PagesProjectDeploymentConfigsProductionServiceBindingList <a name="PagesProjectDeploymentConfigsProductionServiceBindingList" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

new pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.get"></a>

```typescript
public get(index: number): PagesProjectDeploymentConfigsProductionServiceBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PagesProjectDeploymentConfigsProductionServiceBinding[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a>[]

---


### PagesProjectDeploymentConfigsProductionServiceBindingOutputReference <a name="PagesProjectDeploymentConfigsProductionServiceBindingOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

new pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PagesProjectDeploymentConfigsProductionServiceBinding;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding">PagesProjectDeploymentConfigsProductionServiceBinding</a>

---


### PagesProjectSourceConfigOutputReference <a name="PagesProjectSourceConfigOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.Initializer"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

new pagesProject.PagesProjectSourceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetDeploymentsEnabled">resetDeploymentsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPrCommentsEnabled">resetPrCommentsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewBranchExcludes">resetPreviewBranchExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewBranchIncludes">resetPreviewBranchIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewDeploymentSetting">resetPreviewDeploymentSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetProductionDeploymentEnabled">resetProductionDeploymentEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetRepoName">resetRepoName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeploymentsEnabled` <a name="resetDeploymentsEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetDeploymentsEnabled"></a>

```typescript
public resetDeploymentsEnabled(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetPrCommentsEnabled` <a name="resetPrCommentsEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPrCommentsEnabled"></a>

```typescript
public resetPrCommentsEnabled(): void
```

##### `resetPreviewBranchExcludes` <a name="resetPreviewBranchExcludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewBranchExcludes"></a>

```typescript
public resetPreviewBranchExcludes(): void
```

##### `resetPreviewBranchIncludes` <a name="resetPreviewBranchIncludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewBranchIncludes"></a>

```typescript
public resetPreviewBranchIncludes(): void
```

##### `resetPreviewDeploymentSetting` <a name="resetPreviewDeploymentSetting" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewDeploymentSetting"></a>

```typescript
public resetPreviewDeploymentSetting(): void
```

##### `resetProductionDeploymentEnabled` <a name="resetProductionDeploymentEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetProductionDeploymentEnabled"></a>

```typescript
public resetProductionDeploymentEnabled(): void
```

##### `resetRepoName` <a name="resetRepoName" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetRepoName"></a>

```typescript
public resetRepoName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.deploymentsEnabledInput">deploymentsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.prCommentsEnabledInput">prCommentsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchExcludesInput">previewBranchExcludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchIncludesInput">previewBranchIncludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewDeploymentSettingInput">previewDeploymentSettingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionBranchInput">productionBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionDeploymentEnabledInput">productionDeploymentEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.repoNameInput">repoNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.deploymentsEnabled">deploymentsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.prCommentsEnabled">prCommentsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchExcludes">previewBranchExcludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchIncludes">previewBranchIncludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewDeploymentSetting">previewDeploymentSetting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionBranch">productionBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionDeploymentEnabled">productionDeploymentEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.repoName">repoName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deploymentsEnabledInput`<sup>Optional</sup> <a name="deploymentsEnabledInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.deploymentsEnabledInput"></a>

```typescript
public readonly deploymentsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `prCommentsEnabledInput`<sup>Optional</sup> <a name="prCommentsEnabledInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.prCommentsEnabledInput"></a>

```typescript
public readonly prCommentsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `previewBranchExcludesInput`<sup>Optional</sup> <a name="previewBranchExcludesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchExcludesInput"></a>

```typescript
public readonly previewBranchExcludesInput: string[];
```

- *Type:* string[]

---

##### `previewBranchIncludesInput`<sup>Optional</sup> <a name="previewBranchIncludesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchIncludesInput"></a>

```typescript
public readonly previewBranchIncludesInput: string[];
```

- *Type:* string[]

---

##### `previewDeploymentSettingInput`<sup>Optional</sup> <a name="previewDeploymentSettingInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewDeploymentSettingInput"></a>

```typescript
public readonly previewDeploymentSettingInput: string;
```

- *Type:* string

---

##### `productionBranchInput`<sup>Optional</sup> <a name="productionBranchInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionBranchInput"></a>

```typescript
public readonly productionBranchInput: string;
```

- *Type:* string

---

##### `productionDeploymentEnabledInput`<sup>Optional</sup> <a name="productionDeploymentEnabledInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionDeploymentEnabledInput"></a>

```typescript
public readonly productionDeploymentEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repoNameInput`<sup>Optional</sup> <a name="repoNameInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.repoNameInput"></a>

```typescript
public readonly repoNameInput: string;
```

- *Type:* string

---

##### `deploymentsEnabled`<sup>Required</sup> <a name="deploymentsEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.deploymentsEnabled"></a>

```typescript
public readonly deploymentsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `prCommentsEnabled`<sup>Required</sup> <a name="prCommentsEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.prCommentsEnabled"></a>

```typescript
public readonly prCommentsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `previewBranchExcludes`<sup>Required</sup> <a name="previewBranchExcludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchExcludes"></a>

```typescript
public readonly previewBranchExcludes: string[];
```

- *Type:* string[]

---

##### `previewBranchIncludes`<sup>Required</sup> <a name="previewBranchIncludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchIncludes"></a>

```typescript
public readonly previewBranchIncludes: string[];
```

- *Type:* string[]

---

##### `previewDeploymentSetting`<sup>Required</sup> <a name="previewDeploymentSetting" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewDeploymentSetting"></a>

```typescript
public readonly previewDeploymentSetting: string;
```

- *Type:* string

---

##### `productionBranch`<sup>Required</sup> <a name="productionBranch" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionBranch"></a>

```typescript
public readonly productionBranch: string;
```

- *Type:* string

---

##### `productionDeploymentEnabled`<sup>Required</sup> <a name="productionDeploymentEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionDeploymentEnabled"></a>

```typescript
public readonly productionDeploymentEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repoName`<sup>Required</sup> <a name="repoName" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.repoName"></a>

```typescript
public readonly repoName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PagesProjectSourceConfig;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a>

---


### PagesProjectSourceOutputReference <a name="PagesProjectSourceOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.Initializer"></a>

```typescript
import { pagesProject } from '@cdktf/provider-cloudflare'

new pagesProject.PagesProjectSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.putConfig"></a>

```typescript
public putConfig(value: PagesProjectSourceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference">PagesProjectSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.config"></a>

```typescript
public readonly config: PagesProjectSourceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference">PagesProjectSourceConfigOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.configInput"></a>

```typescript
public readonly configInput: PagesProjectSourceConfig;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PagesProjectSource;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a>

---



