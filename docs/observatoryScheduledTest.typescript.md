# `observatoryScheduledTest` Submodule <a name="`observatoryScheduledTest` Submodule" id="@cdktf/provider-cloudflare.observatoryScheduledTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservatoryScheduledTest <a name="ObservatoryScheduledTest" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/observatory_scheduled_test cloudflare_observatory_scheduled_test}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.Initializer"></a>

```typescript
import { observatoryScheduledTest } from '@cdktf/provider-cloudflare'

new observatoryScheduledTest.ObservatoryScheduledTest(scope: Construct, id: string, config: ObservatoryScheduledTestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig">ObservatoryScheduledTestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig">ObservatoryScheduledTestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ObservatoryScheduledTest resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.isConstruct"></a>

```typescript
import { observatoryScheduledTest } from '@cdktf/provider-cloudflare'

observatoryScheduledTest.ObservatoryScheduledTest.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.isTerraformElement"></a>

```typescript
import { observatoryScheduledTest } from '@cdktf/provider-cloudflare'

observatoryScheduledTest.ObservatoryScheduledTest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.isTerraformResource"></a>

```typescript
import { observatoryScheduledTest } from '@cdktf/provider-cloudflare'

observatoryScheduledTest.ObservatoryScheduledTest.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.generateConfigForImport"></a>

```typescript
import { observatoryScheduledTest } from '@cdktf/provider-cloudflare'

observatoryScheduledTest.ObservatoryScheduledTest.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ObservatoryScheduledTest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObservatoryScheduledTest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObservatoryScheduledTest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/observatory_scheduled_test#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ObservatoryScheduledTest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference">ObservatoryScheduledTestScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.test">test</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference">ObservatoryScheduledTestTestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.schedule"></a>

```typescript
public readonly schedule: ObservatoryScheduledTestScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference">ObservatoryScheduledTestScheduleOutputReference</a>

---

##### `test`<sup>Required</sup> <a name="test" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.test"></a>

```typescript
public readonly test: ObservatoryScheduledTestTestOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference">ObservatoryScheduledTestTestOutputReference</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObservatoryScheduledTestConfig <a name="ObservatoryScheduledTestConfig" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.Initializer"></a>

```typescript
import { observatoryScheduledTest } from '@cdktf/provider-cloudflare'

const observatoryScheduledTestConfig: observatoryScheduledTest.ObservatoryScheduledTestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.url">url</a></code> | <code>string</code> | A URL. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

A URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/observatory_scheduled_test#url ObservatoryScheduledTest#url}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/observatory_scheduled_test#zone_id ObservatoryScheduledTest#zone_id}

---

### ObservatoryScheduledTestSchedule <a name="ObservatoryScheduledTestSchedule" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestSchedule.Initializer"></a>

```typescript
import { observatoryScheduledTest } from '@cdktf/provider-cloudflare'

const observatoryScheduledTestSchedule: observatoryScheduledTest.ObservatoryScheduledTestSchedule = { ... }
```


### ObservatoryScheduledTestTest <a name="ObservatoryScheduledTestTest" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTest.Initializer"></a>

```typescript
import { observatoryScheduledTest } from '@cdktf/provider-cloudflare'

const observatoryScheduledTestTest: observatoryScheduledTest.ObservatoryScheduledTestTest = { ... }
```


### ObservatoryScheduledTestTestDesktopReport <a name="ObservatoryScheduledTestTestDesktopReport" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReport.Initializer"></a>

```typescript
import { observatoryScheduledTest } from '@cdktf/provider-cloudflare'

const observatoryScheduledTestTestDesktopReport: observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReport = { ... }
```


### ObservatoryScheduledTestTestDesktopReportError <a name="ObservatoryScheduledTestTestDesktopReportError" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportError.Initializer"></a>

```typescript
import { observatoryScheduledTest } from '@cdktf/provider-cloudflare'

const observatoryScheduledTestTestDesktopReportError: observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportError = { ... }
```


### ObservatoryScheduledTestTestMobileReport <a name="ObservatoryScheduledTestTestMobileReport" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReport.Initializer"></a>

```typescript
import { observatoryScheduledTest } from '@cdktf/provider-cloudflare'

const observatoryScheduledTestTestMobileReport: observatoryScheduledTest.ObservatoryScheduledTestTestMobileReport = { ... }
```


### ObservatoryScheduledTestTestMobileReportError <a name="ObservatoryScheduledTestTestMobileReportError" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportError.Initializer"></a>

```typescript
import { observatoryScheduledTest } from '@cdktf/provider-cloudflare'

const observatoryScheduledTestTestMobileReportError: observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportError = { ... }
```


### ObservatoryScheduledTestTestRegion <a name="ObservatoryScheduledTestTestRegion" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegion.Initializer"></a>

```typescript
import { observatoryScheduledTest } from '@cdktf/provider-cloudflare'

const observatoryScheduledTestTestRegion: observatoryScheduledTest.ObservatoryScheduledTestTestRegion = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### ObservatoryScheduledTestScheduleOutputReference <a name="ObservatoryScheduledTestScheduleOutputReference" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.Initializer"></a>

```typescript
import { observatoryScheduledTest } from '@cdktf/provider-cloudflare'

new observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestSchedule">ObservatoryScheduledTestSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ObservatoryScheduledTestSchedule;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestSchedule">ObservatoryScheduledTestSchedule</a>

---


### ObservatoryScheduledTestTestDesktopReportErrorOutputReference <a name="ObservatoryScheduledTestTestDesktopReportErrorOutputReference" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.Initializer"></a>

```typescript
import { observatoryScheduledTest } from '@cdktf/provider-cloudflare'

new observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.detail">detail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.finalDisplayedUrl">finalDisplayedUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportError">ObservatoryScheduledTestTestDesktopReportError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `detail`<sup>Required</sup> <a name="detail" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.detail"></a>

```typescript
public readonly detail: string;
```

- *Type:* string

---

##### `finalDisplayedUrl`<sup>Required</sup> <a name="finalDisplayedUrl" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.finalDisplayedUrl"></a>

```typescript
public readonly finalDisplayedUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ObservatoryScheduledTestTestDesktopReportError;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportError">ObservatoryScheduledTestTestDesktopReportError</a>

---


### ObservatoryScheduledTestTestDesktopReportOutputReference <a name="ObservatoryScheduledTestTestDesktopReportOutputReference" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.Initializer"></a>

```typescript
import { observatoryScheduledTest } from '@cdktf/provider-cloudflare'

new observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.cls">cls</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.deviceType">deviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.error">error</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference">ObservatoryScheduledTestTestDesktopReportErrorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.fcp">fcp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.jsonReportUrl">jsonReportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.lcp">lcp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.performanceScore">performanceScore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.si">si</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.tbt">tbt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.ttfb">ttfb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.tti">tti</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReport">ObservatoryScheduledTestTestDesktopReport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cls`<sup>Required</sup> <a name="cls" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.cls"></a>

```typescript
public readonly cls: number;
```

- *Type:* number

---

##### `deviceType`<sup>Required</sup> <a name="deviceType" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.deviceType"></a>

```typescript
public readonly deviceType: string;
```

- *Type:* string

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.error"></a>

```typescript
public readonly error: ObservatoryScheduledTestTestDesktopReportErrorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference">ObservatoryScheduledTestTestDesktopReportErrorOutputReference</a>

---

##### `fcp`<sup>Required</sup> <a name="fcp" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.fcp"></a>

```typescript
public readonly fcp: number;
```

- *Type:* number

---

##### `jsonReportUrl`<sup>Required</sup> <a name="jsonReportUrl" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.jsonReportUrl"></a>

```typescript
public readonly jsonReportUrl: string;
```

- *Type:* string

---

##### `lcp`<sup>Required</sup> <a name="lcp" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.lcp"></a>

```typescript
public readonly lcp: number;
```

- *Type:* number

---

##### `performanceScore`<sup>Required</sup> <a name="performanceScore" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.performanceScore"></a>

```typescript
public readonly performanceScore: number;
```

- *Type:* number

---

##### `si`<sup>Required</sup> <a name="si" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.si"></a>

```typescript
public readonly si: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tbt`<sup>Required</sup> <a name="tbt" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.tbt"></a>

```typescript
public readonly tbt: number;
```

- *Type:* number

---

##### `ttfb`<sup>Required</sup> <a name="ttfb" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.ttfb"></a>

```typescript
public readonly ttfb: number;
```

- *Type:* number

---

##### `tti`<sup>Required</sup> <a name="tti" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.tti"></a>

```typescript
public readonly tti: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ObservatoryScheduledTestTestDesktopReport;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReport">ObservatoryScheduledTestTestDesktopReport</a>

---


### ObservatoryScheduledTestTestMobileReportErrorOutputReference <a name="ObservatoryScheduledTestTestMobileReportErrorOutputReference" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.Initializer"></a>

```typescript
import { observatoryScheduledTest } from '@cdktf/provider-cloudflare'

new observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.detail">detail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.finalDisplayedUrl">finalDisplayedUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportError">ObservatoryScheduledTestTestMobileReportError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `detail`<sup>Required</sup> <a name="detail" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.detail"></a>

```typescript
public readonly detail: string;
```

- *Type:* string

---

##### `finalDisplayedUrl`<sup>Required</sup> <a name="finalDisplayedUrl" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.finalDisplayedUrl"></a>

```typescript
public readonly finalDisplayedUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ObservatoryScheduledTestTestMobileReportError;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportError">ObservatoryScheduledTestTestMobileReportError</a>

---


### ObservatoryScheduledTestTestMobileReportOutputReference <a name="ObservatoryScheduledTestTestMobileReportOutputReference" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.Initializer"></a>

```typescript
import { observatoryScheduledTest } from '@cdktf/provider-cloudflare'

new observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.cls">cls</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.deviceType">deviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.error">error</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference">ObservatoryScheduledTestTestMobileReportErrorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.fcp">fcp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.jsonReportUrl">jsonReportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.lcp">lcp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.performanceScore">performanceScore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.si">si</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.tbt">tbt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.ttfb">ttfb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.tti">tti</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReport">ObservatoryScheduledTestTestMobileReport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cls`<sup>Required</sup> <a name="cls" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.cls"></a>

```typescript
public readonly cls: number;
```

- *Type:* number

---

##### `deviceType`<sup>Required</sup> <a name="deviceType" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.deviceType"></a>

```typescript
public readonly deviceType: string;
```

- *Type:* string

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.error"></a>

```typescript
public readonly error: ObservatoryScheduledTestTestMobileReportErrorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference">ObservatoryScheduledTestTestMobileReportErrorOutputReference</a>

---

##### `fcp`<sup>Required</sup> <a name="fcp" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.fcp"></a>

```typescript
public readonly fcp: number;
```

- *Type:* number

---

##### `jsonReportUrl`<sup>Required</sup> <a name="jsonReportUrl" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.jsonReportUrl"></a>

```typescript
public readonly jsonReportUrl: string;
```

- *Type:* string

---

##### `lcp`<sup>Required</sup> <a name="lcp" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.lcp"></a>

```typescript
public readonly lcp: number;
```

- *Type:* number

---

##### `performanceScore`<sup>Required</sup> <a name="performanceScore" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.performanceScore"></a>

```typescript
public readonly performanceScore: number;
```

- *Type:* number

---

##### `si`<sup>Required</sup> <a name="si" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.si"></a>

```typescript
public readonly si: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tbt`<sup>Required</sup> <a name="tbt" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.tbt"></a>

```typescript
public readonly tbt: number;
```

- *Type:* number

---

##### `ttfb`<sup>Required</sup> <a name="ttfb" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.ttfb"></a>

```typescript
public readonly ttfb: number;
```

- *Type:* number

---

##### `tti`<sup>Required</sup> <a name="tti" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.tti"></a>

```typescript
public readonly tti: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ObservatoryScheduledTestTestMobileReport;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReport">ObservatoryScheduledTestTestMobileReport</a>

---


### ObservatoryScheduledTestTestOutputReference <a name="ObservatoryScheduledTestTestOutputReference" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.Initializer"></a>

```typescript
import { observatoryScheduledTest } from '@cdktf/provider-cloudflare'

new observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.date">date</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.desktopReport">desktopReport</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference">ObservatoryScheduledTestTestDesktopReportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.mobileReport">mobileReport</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference">ObservatoryScheduledTestTestMobileReportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.region">region</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference">ObservatoryScheduledTestTestRegionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.scheduleFrequency">scheduleFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTest">ObservatoryScheduledTestTest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `date`<sup>Required</sup> <a name="date" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.date"></a>

```typescript
public readonly date: string;
```

- *Type:* string

---

##### `desktopReport`<sup>Required</sup> <a name="desktopReport" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.desktopReport"></a>

```typescript
public readonly desktopReport: ObservatoryScheduledTestTestDesktopReportOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference">ObservatoryScheduledTestTestDesktopReportOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mobileReport`<sup>Required</sup> <a name="mobileReport" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.mobileReport"></a>

```typescript
public readonly mobileReport: ObservatoryScheduledTestTestMobileReportOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference">ObservatoryScheduledTestTestMobileReportOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.region"></a>

```typescript
public readonly region: ObservatoryScheduledTestTestRegionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference">ObservatoryScheduledTestTestRegionOutputReference</a>

---

##### `scheduleFrequency`<sup>Required</sup> <a name="scheduleFrequency" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.scheduleFrequency"></a>

```typescript
public readonly scheduleFrequency: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ObservatoryScheduledTestTest;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTest">ObservatoryScheduledTestTest</a>

---


### ObservatoryScheduledTestTestRegionOutputReference <a name="ObservatoryScheduledTestTestRegionOutputReference" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.Initializer"></a>

```typescript
import { observatoryScheduledTest } from '@cdktf/provider-cloudflare'

new observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegion">ObservatoryScheduledTestTestRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ObservatoryScheduledTestTestRegion;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegion">ObservatoryScheduledTestTestRegion</a>

---



