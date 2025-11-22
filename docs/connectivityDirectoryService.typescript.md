# `connectivityDirectoryService` Submodule <a name="`connectivityDirectoryService` Submodule" id="@cdktf/provider-cloudflare.connectivityDirectoryService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectivityDirectoryService <a name="ConnectivityDirectoryService" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service cloudflare_connectivity_directory_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer"></a>

```typescript
import { connectivityDirectoryService } from '@cdktf/provider-cloudflare'

new connectivityDirectoryService.ConnectivityDirectoryService(scope: Construct, id: string, config: ConnectivityDirectoryServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig">ConnectivityDirectoryServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig">ConnectivityDirectoryServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.putHost">putHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.resetHttpPort">resetHttpPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.resetHttpsPort">resetHttpsPort</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHost` <a name="putHost" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.putHost"></a>

```typescript
public putHost(value: ConnectivityDirectoryServiceHost): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.putHost.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost">ConnectivityDirectoryServiceHost</a>

---

##### `resetHttpPort` <a name="resetHttpPort" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.resetHttpPort"></a>

```typescript
public resetHttpPort(): void
```

##### `resetHttpsPort` <a name="resetHttpsPort" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.resetHttpsPort"></a>

```typescript
public resetHttpsPort(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ConnectivityDirectoryService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.isConstruct"></a>

```typescript
import { connectivityDirectoryService } from '@cdktf/provider-cloudflare'

connectivityDirectoryService.ConnectivityDirectoryService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.isTerraformElement"></a>

```typescript
import { connectivityDirectoryService } from '@cdktf/provider-cloudflare'

connectivityDirectoryService.ConnectivityDirectoryService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.isTerraformResource"></a>

```typescript
import { connectivityDirectoryService } from '@cdktf/provider-cloudflare'

connectivityDirectoryService.ConnectivityDirectoryService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.generateConfigForImport"></a>

```typescript
import { connectivityDirectoryService } from '@cdktf/provider-cloudflare'

connectivityDirectoryService.ConnectivityDirectoryService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ConnectivityDirectoryService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectivityDirectoryService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectivityDirectoryService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ConnectivityDirectoryService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.host">host</a></code> | <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference">ConnectivityDirectoryServiceHostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.hostInput">hostInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost">ConnectivityDirectoryServiceHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.httpPortInput">httpPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.httpsPortInput">httpsPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.httpPort">httpPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.httpsPort">httpsPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.host"></a>

```typescript
public readonly host: ConnectivityDirectoryServiceHostOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference">ConnectivityDirectoryServiceHostOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.hostInput"></a>

```typescript
public readonly hostInput: IResolvable | ConnectivityDirectoryServiceHost;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost">ConnectivityDirectoryServiceHost</a>

---

##### `httpPortInput`<sup>Optional</sup> <a name="httpPortInput" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.httpPortInput"></a>

```typescript
public readonly httpPortInput: number;
```

- *Type:* number

---

##### `httpsPortInput`<sup>Optional</sup> <a name="httpsPortInput" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.httpsPortInput"></a>

```typescript
public readonly httpsPortInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `httpPort`<sup>Required</sup> <a name="httpPort" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.httpPort"></a>

```typescript
public readonly httpPort: number;
```

- *Type:* number

---

##### `httpsPort`<sup>Required</sup> <a name="httpsPort" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.httpsPort"></a>

```typescript
public readonly httpsPort: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectivityDirectoryServiceConfig <a name="ConnectivityDirectoryServiceConfig" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.Initializer"></a>

```typescript
import { connectivityDirectoryService } from '@cdktf/provider-cloudflare'

const connectivityDirectoryServiceConfig: connectivityDirectoryService.ConnectivityDirectoryServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.accountId">accountId</a></code> | <code>string</code> | Account identifier. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.host">host</a></code> | <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost">ConnectivityDirectoryServiceHost</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service#host ConnectivityDirectoryService#host}. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service#name ConnectivityDirectoryService#name}. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.type">type</a></code> | <code>string</code> | Available values: "http". |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.httpPort">httpPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service#http_port ConnectivityDirectoryService#http_port}. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.httpsPort">httpsPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service#https_port ConnectivityDirectoryService#https_port}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service#account_id ConnectivityDirectoryService#account_id}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.host"></a>

```typescript
public readonly host: ConnectivityDirectoryServiceHost;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost">ConnectivityDirectoryServiceHost</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service#host ConnectivityDirectoryService#host}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service#name ConnectivityDirectoryService#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Available values: "http".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service#type ConnectivityDirectoryService#type}

---

##### `httpPort`<sup>Optional</sup> <a name="httpPort" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.httpPort"></a>

```typescript
public readonly httpPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service#http_port ConnectivityDirectoryService#http_port}.

---

##### `httpsPort`<sup>Optional</sup> <a name="httpsPort" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceConfig.property.httpsPort"></a>

```typescript
public readonly httpsPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service#https_port ConnectivityDirectoryService#https_port}.

---

### ConnectivityDirectoryServiceHost <a name="ConnectivityDirectoryServiceHost" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.Initializer"></a>

```typescript
import { connectivityDirectoryService } from '@cdktf/provider-cloudflare'

const connectivityDirectoryServiceHost: connectivityDirectoryService.ConnectivityDirectoryServiceHost = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.hostname">hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service#hostname ConnectivityDirectoryService#hostname}. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.ipv4">ipv4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service#ipv4 ConnectivityDirectoryService#ipv4}. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.ipv6">ipv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service#ipv6 ConnectivityDirectoryService#ipv6}. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.network">network</a></code> | <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork">ConnectivityDirectoryServiceHostNetwork</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service#network ConnectivityDirectoryService#network}. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.resolverNetwork">resolverNetwork</a></code> | <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork">ConnectivityDirectoryServiceHostResolverNetwork</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service#resolver_network ConnectivityDirectoryService#resolver_network}. |

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service#hostname ConnectivityDirectoryService#hostname}.

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.ipv4"></a>

```typescript
public readonly ipv4: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service#ipv4 ConnectivityDirectoryService#ipv4}.

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.ipv6"></a>

```typescript
public readonly ipv6: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service#ipv6 ConnectivityDirectoryService#ipv6}.

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.network"></a>

```typescript
public readonly network: ConnectivityDirectoryServiceHostNetwork;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork">ConnectivityDirectoryServiceHostNetwork</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service#network ConnectivityDirectoryService#network}.

---

##### `resolverNetwork`<sup>Optional</sup> <a name="resolverNetwork" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost.property.resolverNetwork"></a>

```typescript
public readonly resolverNetwork: ConnectivityDirectoryServiceHostResolverNetwork;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork">ConnectivityDirectoryServiceHostResolverNetwork</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service#resolver_network ConnectivityDirectoryService#resolver_network}.

---

### ConnectivityDirectoryServiceHostNetwork <a name="ConnectivityDirectoryServiceHostNetwork" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork.Initializer"></a>

```typescript
import { connectivityDirectoryService } from '@cdktf/provider-cloudflare'

const connectivityDirectoryServiceHostNetwork: connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork.property.tunnelId">tunnelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service#tunnel_id ConnectivityDirectoryService#tunnel_id}. |

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service#tunnel_id ConnectivityDirectoryService#tunnel_id}.

---

### ConnectivityDirectoryServiceHostResolverNetwork <a name="ConnectivityDirectoryServiceHostResolverNetwork" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork.Initializer"></a>

```typescript
import { connectivityDirectoryService } from '@cdktf/provider-cloudflare'

const connectivityDirectoryServiceHostResolverNetwork: connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork.property.tunnelId">tunnelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service#tunnel_id ConnectivityDirectoryService#tunnel_id}. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork.property.resolverIps">resolverIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service#resolver_ips ConnectivityDirectoryService#resolver_ips}. |

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service#tunnel_id ConnectivityDirectoryService#tunnel_id}.

---

##### `resolverIps`<sup>Optional</sup> <a name="resolverIps" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork.property.resolverIps"></a>

```typescript
public readonly resolverIps: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/connectivity_directory_service#resolver_ips ConnectivityDirectoryService#resolver_ips}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectivityDirectoryServiceHostNetworkOutputReference <a name="ConnectivityDirectoryServiceHostNetworkOutputReference" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.Initializer"></a>

```typescript
import { connectivityDirectoryService } from '@cdktf/provider-cloudflare'

new connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.tunnelIdInput">tunnelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.tunnelId">tunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork">ConnectivityDirectoryServiceHostNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tunnelIdInput`<sup>Optional</sup> <a name="tunnelIdInput" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.tunnelIdInput"></a>

```typescript
public readonly tunnelIdInput: string;
```

- *Type:* string

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectivityDirectoryServiceHostNetwork;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork">ConnectivityDirectoryServiceHostNetwork</a>

---


### ConnectivityDirectoryServiceHostOutputReference <a name="ConnectivityDirectoryServiceHostOutputReference" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.Initializer"></a>

```typescript
import { connectivityDirectoryService } from '@cdktf/provider-cloudflare'

new connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.putResolverNetwork">putResolverNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetIpv4">resetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetIpv6">resetIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetResolverNetwork">resetResolverNetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.putNetwork"></a>

```typescript
public putNetwork(value: ConnectivityDirectoryServiceHostNetwork): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork">ConnectivityDirectoryServiceHostNetwork</a>

---

##### `putResolverNetwork` <a name="putResolverNetwork" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.putResolverNetwork"></a>

```typescript
public putResolverNetwork(value: ConnectivityDirectoryServiceHostResolverNetwork): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.putResolverNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork">ConnectivityDirectoryServiceHostResolverNetwork</a>

---

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetIpv4` <a name="resetIpv4" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetIpv4"></a>

```typescript
public resetIpv4(): void
```

##### `resetIpv6` <a name="resetIpv6" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetIpv6"></a>

```typescript
public resetIpv6(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetResolverNetwork` <a name="resetResolverNetwork" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.resetResolverNetwork"></a>

```typescript
public resetResolverNetwork(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.network">network</a></code> | <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference">ConnectivityDirectoryServiceHostNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.resolverNetwork">resolverNetwork</a></code> | <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference">ConnectivityDirectoryServiceHostResolverNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.ipv4Input">ipv4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.ipv6Input">ipv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.networkInput">networkInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork">ConnectivityDirectoryServiceHostNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.resolverNetworkInput">resolverNetworkInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork">ConnectivityDirectoryServiceHostResolverNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.ipv4">ipv4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.ipv6">ipv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost">ConnectivityDirectoryServiceHost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.network"></a>

```typescript
public readonly network: ConnectivityDirectoryServiceHostNetworkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetworkOutputReference">ConnectivityDirectoryServiceHostNetworkOutputReference</a>

---

##### `resolverNetwork`<sup>Required</sup> <a name="resolverNetwork" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.resolverNetwork"></a>

```typescript
public readonly resolverNetwork: ConnectivityDirectoryServiceHostResolverNetworkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference">ConnectivityDirectoryServiceHostResolverNetworkOutputReference</a>

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `ipv4Input`<sup>Optional</sup> <a name="ipv4Input" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.ipv4Input"></a>

```typescript
public readonly ipv4Input: string;
```

- *Type:* string

---

##### `ipv6Input`<sup>Optional</sup> <a name="ipv6Input" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.ipv6Input"></a>

```typescript
public readonly ipv6Input: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: IResolvable | ConnectivityDirectoryServiceHostNetwork;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostNetwork">ConnectivityDirectoryServiceHostNetwork</a>

---

##### `resolverNetworkInput`<sup>Optional</sup> <a name="resolverNetworkInput" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.resolverNetworkInput"></a>

```typescript
public readonly resolverNetworkInput: IResolvable | ConnectivityDirectoryServiceHostResolverNetwork;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork">ConnectivityDirectoryServiceHostResolverNetwork</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.ipv4"></a>

```typescript
public readonly ipv4: string;
```

- *Type:* string

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.ipv6"></a>

```typescript
public readonly ipv6: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectivityDirectoryServiceHost;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHost">ConnectivityDirectoryServiceHost</a>

---


### ConnectivityDirectoryServiceHostResolverNetworkOutputReference <a name="ConnectivityDirectoryServiceHostResolverNetworkOutputReference" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer"></a>

```typescript
import { connectivityDirectoryService } from '@cdktf/provider-cloudflare'

new connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.resetResolverIps">resetResolverIps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResolverIps` <a name="resetResolverIps" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.resetResolverIps"></a>

```typescript
public resetResolverIps(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.resolverIpsInput">resolverIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.tunnelIdInput">tunnelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.resolverIps">resolverIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.tunnelId">tunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork">ConnectivityDirectoryServiceHostResolverNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resolverIpsInput`<sup>Optional</sup> <a name="resolverIpsInput" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.resolverIpsInput"></a>

```typescript
public readonly resolverIpsInput: string[];
```

- *Type:* string[]

---

##### `tunnelIdInput`<sup>Optional</sup> <a name="tunnelIdInput" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.tunnelIdInput"></a>

```typescript
public readonly tunnelIdInput: string;
```

- *Type:* string

---

##### `resolverIps`<sup>Required</sup> <a name="resolverIps" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.resolverIps"></a>

```typescript
public readonly resolverIps: string[];
```

- *Type:* string[]

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectivityDirectoryServiceHostResolverNetwork;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.connectivityDirectoryService.ConnectivityDirectoryServiceHostResolverNetwork">ConnectivityDirectoryServiceHostResolverNetwork</a>

---



