# `record` Submodule <a name="`record` Submodule" id="@cdktf/provider-cloudflare.record"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Record <a name="Record" id="@cdktf/provider-cloudflare.record.Record"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record cloudflare_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.record.Record.Initializer"></a>

```typescript
import { record } from '@cdktf/provider-cloudflare'

new record.Record(scope: Construct, id: string, config: RecordConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig">RecordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordConfig">RecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.putData">putData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetAllowOverwrite">resetAllowOverwrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetProxied">resetProxied</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetValue">resetValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.record.Record.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.record.Record.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.record.Record.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.record.Record.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.record.Record.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.record.Record.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.record.Record.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.record.Record.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.record.Record.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.record.Record.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.record.Record.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.record.Record.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.record.Record.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.record.Record.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.record.Record.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.record.Record.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.record.Record.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.record.Record.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.record.Record.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.record.Record.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.record.Record.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.record.Record.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.record.Record.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.record.Record.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.record.Record.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.Record.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.record.Record.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.record.Record.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.record.Record.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.record.Record.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.record.Record.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.record.Record.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.record.Record.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putData` <a name="putData" id="@cdktf/provider-cloudflare.record.Record.putData"></a>

```typescript
public putData(value: RecordData): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-cloudflare.record.Record.putTimeouts"></a>

```typescript
public putTimeouts(value: RecordTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.record.Record.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a>

---

##### `resetAllowOverwrite` <a name="resetAllowOverwrite" id="@cdktf/provider-cloudflare.record.Record.resetAllowOverwrite"></a>

```typescript
public resetAllowOverwrite(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-cloudflare.record.Record.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetData` <a name="resetData" id="@cdktf/provider-cloudflare.record.Record.resetData"></a>

```typescript
public resetData(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.record.Record.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-cloudflare.record.Record.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetProxied` <a name="resetProxied" id="@cdktf/provider-cloudflare.record.Record.resetProxied"></a>

```typescript
public resetProxied(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-cloudflare.record.Record.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-cloudflare.record.Record.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-cloudflare.record.Record.resetTtl"></a>

```typescript
public resetTtl(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-cloudflare.record.Record.resetValue"></a>

```typescript
public resetValue(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Record resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.record.Record.isConstruct"></a>

```typescript
import { record } from '@cdktf/provider-cloudflare'

record.Record.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.record.Record.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.record.Record.isTerraformElement"></a>

```typescript
import { record } from '@cdktf/provider-cloudflare'

record.Record.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.record.Record.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.record.Record.isTerraformResource"></a>

```typescript
import { record } from '@cdktf/provider-cloudflare'

record.Record.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.record.Record.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.record.Record.generateConfigForImport"></a>

```typescript
import { record } from '@cdktf/provider-cloudflare'

record.Record.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Record resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.record.Record.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.record.Record.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Record to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.record.Record.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Record that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.record.Record.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Record to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.data">data</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference">RecordDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.proxiable">proxiable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference">RecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.allowOverwriteInput">allowOverwriteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.dataInput">dataInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.proxiedInput">proxiedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.allowOverwrite">allowOverwrite</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.proxied">proxied</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.record.Record.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.record.Record.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.record.Record.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.record.Record.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.record.Record.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.record.Record.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.record.Record.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.record.Record.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.record.Record.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.record.Record.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.record.Record.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.record.Record.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.record.Record.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.record.Record.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.record.Record.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-cloudflare.record.Record.property.data"></a>

```typescript
public readonly data: RecordDataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference">RecordDataOutputReference</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.record.Record.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-cloudflare.record.Record.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.record.Record.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `proxiable`<sup>Required</sup> <a name="proxiable" id="@cdktf/provider-cloudflare.record.Record.property.proxiable"></a>

```typescript
public readonly proxiable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-cloudflare.record.Record.property.timeouts"></a>

```typescript
public readonly timeouts: RecordTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference">RecordTimeoutsOutputReference</a>

---

##### `allowOverwriteInput`<sup>Optional</sup> <a name="allowOverwriteInput" id="@cdktf/provider-cloudflare.record.Record.property.allowOverwriteInput"></a>

```typescript
public readonly allowOverwriteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-cloudflare.record.Record.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-cloudflare.record.Record.property.dataInput"></a>

```typescript
public readonly dataInput: RecordData;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.record.Record.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.record.Record.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-cloudflare.record.Record.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `proxiedInput`<sup>Optional</sup> <a name="proxiedInput" id="@cdktf/provider-cloudflare.record.Record.property.proxiedInput"></a>

```typescript
public readonly proxiedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-cloudflare.record.Record.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-cloudflare.record.Record.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | RecordTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-cloudflare.record.Record.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.record.Record.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-cloudflare.record.Record.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.record.Record.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `allowOverwrite`<sup>Required</sup> <a name="allowOverwrite" id="@cdktf/provider-cloudflare.record.Record.property.allowOverwrite"></a>

```typescript
public readonly allowOverwrite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-cloudflare.record.Record.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.record.Record.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.record.Record.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.record.Record.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `proxied`<sup>Required</sup> <a name="proxied" id="@cdktf/provider-cloudflare.record.Record.property.proxied"></a>

```typescript
public readonly proxied: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-cloudflare.record.Record.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.record.Record.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.record.Record.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.record.Record.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.record.Record.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.record.Record.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RecordConfig <a name="RecordConfig" id="@cdktf/provider-cloudflare.record.RecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.record.RecordConfig.Initializer"></a>

```typescript
import { record } from '@cdktf/provider-cloudflare'

const recordConfig: record.RecordConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.name">name</a></code> | <code>string</code> | The name of the record. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.type">type</a></code> | <code>string</code> | The type of the record. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.allowOverwrite">allowOverwrite</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow creation of this record in Terraform to overwrite an existing record, if any. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.comment">comment</a></code> | <code>string</code> | Comments or notes about the DNS record. This field has no effect on DNS responses. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.data">data</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a></code> | data block. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#id Record#id}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.priority">priority</a></code> | <code>number</code> | The priority of the record. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.proxied">proxied</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the record gets Cloudflare's origin protection. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.tags">tags</a></code> | <code>string[]</code> | Custom tags for the DNS record. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.ttl">ttl</a></code> | <code>number</code> | The TTL of the record. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.value">value</a></code> | <code>string</code> | The value of the record. Conflicts with `data`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.record.RecordConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.record.RecordConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.record.RecordConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.record.RecordConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.record.RecordConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.record.RecordConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.record.RecordConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.record.RecordConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the record. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#name Record#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.record.RecordConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the record.

Available values: `A`, `AAAA`, `CAA`, `CNAME`, `TXT`, `SRV`, `LOC`, `MX`, `NS`, `SPF`, `CERT`, `DNSKEY`, `DS`, `NAPTR`, `SMIMEA`, `SSHFP`, `TLSA`, `URI`, `PTR`, `HTTPS`, `SVCB`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#type Record#type}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.record.RecordConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#zone_id Record#zone_id}

---

##### `allowOverwrite`<sup>Optional</sup> <a name="allowOverwrite" id="@cdktf/provider-cloudflare.record.RecordConfig.property.allowOverwrite"></a>

```typescript
public readonly allowOverwrite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow creation of this record in Terraform to overwrite an existing record, if any.

This does not affect the ability to update the record in Terraform and does not prevent other resources within Terraform or manual changes outside Terraform from overwriting this record. **This configuration is not recommended for most environments**. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#allow_overwrite Record#allow_overwrite}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-cloudflare.record.RecordConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Comments or notes about the DNS record. This field has no effect on DNS responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#comment Record#comment}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-cloudflare.record.RecordConfig.property.data"></a>

```typescript
public readonly data: RecordData;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a>

data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#data Record#data}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.record.RecordConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#id Record#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.record.RecordConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

The priority of the record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#priority Record#priority}

---

##### `proxied`<sup>Optional</sup> <a name="proxied" id="@cdktf/provider-cloudflare.record.RecordConfig.property.proxied"></a>

```typescript
public readonly proxied: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the record gets Cloudflare's origin protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#proxied Record#proxied}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-cloudflare.record.RecordConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Custom tags for the DNS record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#tags Record#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-cloudflare.record.RecordConfig.property.timeouts"></a>

```typescript
public readonly timeouts: RecordTimeouts;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#timeouts Record#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-cloudflare.record.RecordConfig.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

The TTL of the record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#ttl Record#ttl}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.record.RecordConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the record. Conflicts with `data`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#value Record#value}

---

### RecordData <a name="RecordData" id="@cdktf/provider-cloudflare.record.RecordData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.record.RecordData.Initializer"></a>

```typescript
import { record } from '@cdktf/provider-cloudflare'

const recordData: record.RecordData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.algorithm">algorithm</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#algorithm Record#algorithm}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.altitude">altitude</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#altitude Record#altitude}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.certificate">certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#certificate Record#certificate}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#content Record#content}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.digest">digest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#digest Record#digest}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.digestType">digestType</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#digest_type Record#digest_type}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.fingerprint">fingerprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#fingerprint Record#fingerprint}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.flags">flags</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#flags Record#flags}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.keyTag">keyTag</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#key_tag Record#key_tag}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.latDegrees">latDegrees</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#lat_degrees Record#lat_degrees}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.latDirection">latDirection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#lat_direction Record#lat_direction}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.latMinutes">latMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#lat_minutes Record#lat_minutes}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.latSeconds">latSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#lat_seconds Record#lat_seconds}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.longDegrees">longDegrees</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#long_degrees Record#long_degrees}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.longDirection">longDirection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#long_direction Record#long_direction}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.longMinutes">longMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#long_minutes Record#long_minutes}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.longSeconds">longSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#long_seconds Record#long_seconds}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.matchingType">matchingType</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#matching_type Record#matching_type}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#name Record#name}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.order">order</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#order Record#order}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#port Record#port}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.precisionHorz">precisionHorz</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#precision_horz Record#precision_horz}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.precisionVert">precisionVert</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#precision_vert Record#precision_vert}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.preference">preference</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#preference Record#preference}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#priority Record#priority}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.proto">proto</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#proto Record#proto}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.protocol">protocol</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#protocol Record#protocol}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.publicKey">publicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#public_key Record#public_key}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.regex">regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#regex Record#regex}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.replacement">replacement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#replacement Record#replacement}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.selector">selector</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#selector Record#selector}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.service">service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#service Record#service}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#size Record#size}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.tag">tag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#tag Record#tag}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#target Record#target}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.type">type</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#type Record#type}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.usage">usage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#usage Record#usage}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#value Record#value}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#weight Record#weight}. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-cloudflare.record.RecordData.property.algorithm"></a>

```typescript
public readonly algorithm: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#algorithm Record#algorithm}.

---

##### `altitude`<sup>Optional</sup> <a name="altitude" id="@cdktf/provider-cloudflare.record.RecordData.property.altitude"></a>

```typescript
public readonly altitude: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#altitude Record#altitude}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.record.RecordData.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#certificate Record#certificate}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.record.RecordData.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#content Record#content}.

---

##### `digest`<sup>Optional</sup> <a name="digest" id="@cdktf/provider-cloudflare.record.RecordData.property.digest"></a>

```typescript
public readonly digest: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#digest Record#digest}.

---

##### `digestType`<sup>Optional</sup> <a name="digestType" id="@cdktf/provider-cloudflare.record.RecordData.property.digestType"></a>

```typescript
public readonly digestType: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#digest_type Record#digest_type}.

---

##### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="@cdktf/provider-cloudflare.record.RecordData.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#fingerprint Record#fingerprint}.

---

##### `flags`<sup>Optional</sup> <a name="flags" id="@cdktf/provider-cloudflare.record.RecordData.property.flags"></a>

```typescript
public readonly flags: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#flags Record#flags}.

---

##### `keyTag`<sup>Optional</sup> <a name="keyTag" id="@cdktf/provider-cloudflare.record.RecordData.property.keyTag"></a>

```typescript
public readonly keyTag: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#key_tag Record#key_tag}.

---

##### `latDegrees`<sup>Optional</sup> <a name="latDegrees" id="@cdktf/provider-cloudflare.record.RecordData.property.latDegrees"></a>

```typescript
public readonly latDegrees: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#lat_degrees Record#lat_degrees}.

---

##### `latDirection`<sup>Optional</sup> <a name="latDirection" id="@cdktf/provider-cloudflare.record.RecordData.property.latDirection"></a>

```typescript
public readonly latDirection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#lat_direction Record#lat_direction}.

---

##### `latMinutes`<sup>Optional</sup> <a name="latMinutes" id="@cdktf/provider-cloudflare.record.RecordData.property.latMinutes"></a>

```typescript
public readonly latMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#lat_minutes Record#lat_minutes}.

---

##### `latSeconds`<sup>Optional</sup> <a name="latSeconds" id="@cdktf/provider-cloudflare.record.RecordData.property.latSeconds"></a>

```typescript
public readonly latSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#lat_seconds Record#lat_seconds}.

---

##### `longDegrees`<sup>Optional</sup> <a name="longDegrees" id="@cdktf/provider-cloudflare.record.RecordData.property.longDegrees"></a>

```typescript
public readonly longDegrees: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#long_degrees Record#long_degrees}.

---

##### `longDirection`<sup>Optional</sup> <a name="longDirection" id="@cdktf/provider-cloudflare.record.RecordData.property.longDirection"></a>

```typescript
public readonly longDirection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#long_direction Record#long_direction}.

---

##### `longMinutes`<sup>Optional</sup> <a name="longMinutes" id="@cdktf/provider-cloudflare.record.RecordData.property.longMinutes"></a>

```typescript
public readonly longMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#long_minutes Record#long_minutes}.

---

##### `longSeconds`<sup>Optional</sup> <a name="longSeconds" id="@cdktf/provider-cloudflare.record.RecordData.property.longSeconds"></a>

```typescript
public readonly longSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#long_seconds Record#long_seconds}.

---

##### `matchingType`<sup>Optional</sup> <a name="matchingType" id="@cdktf/provider-cloudflare.record.RecordData.property.matchingType"></a>

```typescript
public readonly matchingType: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#matching_type Record#matching_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.record.RecordData.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#name Record#name}.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.record.RecordData.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#order Record#order}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.record.RecordData.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#port Record#port}.

---

##### `precisionHorz`<sup>Optional</sup> <a name="precisionHorz" id="@cdktf/provider-cloudflare.record.RecordData.property.precisionHorz"></a>

```typescript
public readonly precisionHorz: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#precision_horz Record#precision_horz}.

---

##### `precisionVert`<sup>Optional</sup> <a name="precisionVert" id="@cdktf/provider-cloudflare.record.RecordData.property.precisionVert"></a>

```typescript
public readonly precisionVert: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#precision_vert Record#precision_vert}.

---

##### `preference`<sup>Optional</sup> <a name="preference" id="@cdktf/provider-cloudflare.record.RecordData.property.preference"></a>

```typescript
public readonly preference: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#preference Record#preference}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.record.RecordData.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#priority Record#priority}.

---

##### `proto`<sup>Optional</sup> <a name="proto" id="@cdktf/provider-cloudflare.record.RecordData.property.proto"></a>

```typescript
public readonly proto: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#proto Record#proto}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-cloudflare.record.RecordData.property.protocol"></a>

```typescript
public readonly protocol: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#protocol Record#protocol}.

---

##### `publicKey`<sup>Optional</sup> <a name="publicKey" id="@cdktf/provider-cloudflare.record.RecordData.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#public_key Record#public_key}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-cloudflare.record.RecordData.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#regex Record#regex}.

---

##### `replacement`<sup>Optional</sup> <a name="replacement" id="@cdktf/provider-cloudflare.record.RecordData.property.replacement"></a>

```typescript
public readonly replacement: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#replacement Record#replacement}.

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-cloudflare.record.RecordData.property.selector"></a>

```typescript
public readonly selector: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#selector Record#selector}.

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-cloudflare.record.RecordData.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#service Record#service}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-cloudflare.record.RecordData.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#size Record#size}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-cloudflare.record.RecordData.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#tag Record#tag}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-cloudflare.record.RecordData.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#target Record#target}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.record.RecordData.property.type"></a>

```typescript
public readonly type: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#type Record#type}.

---

##### `usage`<sup>Optional</sup> <a name="usage" id="@cdktf/provider-cloudflare.record.RecordData.property.usage"></a>

```typescript
public readonly usage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#usage Record#usage}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.record.RecordData.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#value Record#value}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-cloudflare.record.RecordData.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#weight Record#weight}.

---

### RecordTimeouts <a name="RecordTimeouts" id="@cdktf/provider-cloudflare.record.RecordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.record.RecordTimeouts.Initializer"></a>

```typescript
import { record } from '@cdktf/provider-cloudflare'

const recordTimeouts: record.RecordTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#create Record#create}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#update Record#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-cloudflare.record.RecordTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#create Record#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-cloudflare.record.RecordTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/record#update Record#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RecordDataOutputReference <a name="RecordDataOutputReference" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.Initializer"></a>

```typescript
import { record } from '@cdktf/provider-cloudflare'

new record.RecordDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetAltitude">resetAltitude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetDigest">resetDigest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetDigestType">resetDigestType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetFingerprint">resetFingerprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetFlags">resetFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetKeyTag">resetKeyTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatDegrees">resetLatDegrees</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatDirection">resetLatDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatMinutes">resetLatMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatSeconds">resetLatSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongDegrees">resetLongDegrees</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongDirection">resetLongDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongMinutes">resetLongMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongSeconds">resetLongSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetMatchingType">resetMatchingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPrecisionHorz">resetPrecisionHorz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPrecisionVert">resetPrecisionVert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPreference">resetPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetProto">resetProto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPublicKey">resetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetReplacement">resetReplacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetSelector">resetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetUsage">resetUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetAlgorithm"></a>

```typescript
public resetAlgorithm(): void
```

##### `resetAltitude` <a name="resetAltitude" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetAltitude"></a>

```typescript
public resetAltitude(): void
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetContent` <a name="resetContent" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetDigest` <a name="resetDigest" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetDigest"></a>

```typescript
public resetDigest(): void
```

##### `resetDigestType` <a name="resetDigestType" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetDigestType"></a>

```typescript
public resetDigestType(): void
```

##### `resetFingerprint` <a name="resetFingerprint" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetFingerprint"></a>

```typescript
public resetFingerprint(): void
```

##### `resetFlags` <a name="resetFlags" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetFlags"></a>

```typescript
public resetFlags(): void
```

##### `resetKeyTag` <a name="resetKeyTag" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetKeyTag"></a>

```typescript
public resetKeyTag(): void
```

##### `resetLatDegrees` <a name="resetLatDegrees" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatDegrees"></a>

```typescript
public resetLatDegrees(): void
```

##### `resetLatDirection` <a name="resetLatDirection" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatDirection"></a>

```typescript
public resetLatDirection(): void
```

##### `resetLatMinutes` <a name="resetLatMinutes" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatMinutes"></a>

```typescript
public resetLatMinutes(): void
```

##### `resetLatSeconds` <a name="resetLatSeconds" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatSeconds"></a>

```typescript
public resetLatSeconds(): void
```

##### `resetLongDegrees` <a name="resetLongDegrees" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongDegrees"></a>

```typescript
public resetLongDegrees(): void
```

##### `resetLongDirection` <a name="resetLongDirection" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongDirection"></a>

```typescript
public resetLongDirection(): void
```

##### `resetLongMinutes` <a name="resetLongMinutes" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongMinutes"></a>

```typescript
public resetLongMinutes(): void
```

##### `resetLongSeconds` <a name="resetLongSeconds" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongSeconds"></a>

```typescript
public resetLongSeconds(): void
```

##### `resetMatchingType` <a name="resetMatchingType" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetMatchingType"></a>

```typescript
public resetMatchingType(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPrecisionHorz` <a name="resetPrecisionHorz" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPrecisionHorz"></a>

```typescript
public resetPrecisionHorz(): void
```

##### `resetPrecisionVert` <a name="resetPrecisionVert" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPrecisionVert"></a>

```typescript
public resetPrecisionVert(): void
```

##### `resetPreference` <a name="resetPreference" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPreference"></a>

```typescript
public resetPreference(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetProto` <a name="resetProto" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetProto"></a>

```typescript
public resetProto(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetPublicKey` <a name="resetPublicKey" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPublicKey"></a>

```typescript
public resetPublicKey(): void
```

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```

##### `resetReplacement` <a name="resetReplacement" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetReplacement"></a>

```typescript
public resetReplacement(): void
```

##### `resetSelector` <a name="resetSelector" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetSelector"></a>

```typescript
public resetSelector(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetService"></a>

```typescript
public resetService(): void
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetSize"></a>

```typescript
public resetSize(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUsage` <a name="resetUsage" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetUsage"></a>

```typescript
public resetUsage(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.altitudeInput">altitudeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestInput">digestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestTypeInput">digestTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fingerprintInput">fingerprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.flagsInput">flagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.keyTagInput">keyTagInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDegreesInput">latDegreesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDirectionInput">latDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latMinutesInput">latMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latSecondsInput">latSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDegreesInput">longDegreesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDirectionInput">longDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longMinutesInput">longMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longSecondsInput">longSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.matchingTypeInput">matchingTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.orderInput">orderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionHorzInput">precisionHorzInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionVertInput">precisionVertInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.preferenceInput">preferenceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protocolInput">protocolInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protoInput">protoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.publicKeyInput">publicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.replacementInput">replacementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.selectorInput">selectorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.typeInput">typeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.usageInput">usageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.algorithm">algorithm</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.altitude">altitude</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digest">digest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestType">digestType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.flags">flags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.keyTag">keyTag</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDegrees">latDegrees</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDirection">latDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latMinutes">latMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latSeconds">latSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDegrees">longDegrees</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDirection">longDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longMinutes">longMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longSeconds">longSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.matchingType">matchingType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.order">order</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionHorz">precisionHorz</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionVert">precisionVert</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.preference">preference</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.proto">proto</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protocol">protocol</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.replacement">replacement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.selector">selector</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.type">type</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.usage">usage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: number;
```

- *Type:* number

---

##### `altitudeInput`<sup>Optional</sup> <a name="altitudeInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.altitudeInput"></a>

```typescript
public readonly altitudeInput: number;
```

- *Type:* number

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `digestInput`<sup>Optional</sup> <a name="digestInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestInput"></a>

```typescript
public readonly digestInput: string;
```

- *Type:* string

---

##### `digestTypeInput`<sup>Optional</sup> <a name="digestTypeInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestTypeInput"></a>

```typescript
public readonly digestTypeInput: number;
```

- *Type:* number

---

##### `fingerprintInput`<sup>Optional</sup> <a name="fingerprintInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fingerprintInput"></a>

```typescript
public readonly fingerprintInput: string;
```

- *Type:* string

---

##### `flagsInput`<sup>Optional</sup> <a name="flagsInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.flagsInput"></a>

```typescript
public readonly flagsInput: string;
```

- *Type:* string

---

##### `keyTagInput`<sup>Optional</sup> <a name="keyTagInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.keyTagInput"></a>

```typescript
public readonly keyTagInput: number;
```

- *Type:* number

---

##### `latDegreesInput`<sup>Optional</sup> <a name="latDegreesInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDegreesInput"></a>

```typescript
public readonly latDegreesInput: number;
```

- *Type:* number

---

##### `latDirectionInput`<sup>Optional</sup> <a name="latDirectionInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDirectionInput"></a>

```typescript
public readonly latDirectionInput: string;
```

- *Type:* string

---

##### `latMinutesInput`<sup>Optional</sup> <a name="latMinutesInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latMinutesInput"></a>

```typescript
public readonly latMinutesInput: number;
```

- *Type:* number

---

##### `latSecondsInput`<sup>Optional</sup> <a name="latSecondsInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latSecondsInput"></a>

```typescript
public readonly latSecondsInput: number;
```

- *Type:* number

---

##### `longDegreesInput`<sup>Optional</sup> <a name="longDegreesInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDegreesInput"></a>

```typescript
public readonly longDegreesInput: number;
```

- *Type:* number

---

##### `longDirectionInput`<sup>Optional</sup> <a name="longDirectionInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDirectionInput"></a>

```typescript
public readonly longDirectionInput: string;
```

- *Type:* string

---

##### `longMinutesInput`<sup>Optional</sup> <a name="longMinutesInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longMinutesInput"></a>

```typescript
public readonly longMinutesInput: number;
```

- *Type:* number

---

##### `longSecondsInput`<sup>Optional</sup> <a name="longSecondsInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longSecondsInput"></a>

```typescript
public readonly longSecondsInput: number;
```

- *Type:* number

---

##### `matchingTypeInput`<sup>Optional</sup> <a name="matchingTypeInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.matchingTypeInput"></a>

```typescript
public readonly matchingTypeInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: number;
```

- *Type:* number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `precisionHorzInput`<sup>Optional</sup> <a name="precisionHorzInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionHorzInput"></a>

```typescript
public readonly precisionHorzInput: number;
```

- *Type:* number

---

##### `precisionVertInput`<sup>Optional</sup> <a name="precisionVertInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionVertInput"></a>

```typescript
public readonly precisionVertInput: number;
```

- *Type:* number

---

##### `preferenceInput`<sup>Optional</sup> <a name="preferenceInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.preferenceInput"></a>

```typescript
public readonly preferenceInput: number;
```

- *Type:* number

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: number;
```

- *Type:* number

---

##### `protoInput`<sup>Optional</sup> <a name="protoInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protoInput"></a>

```typescript
public readonly protoInput: string;
```

- *Type:* string

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.publicKeyInput"></a>

```typescript
public readonly publicKeyInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `replacementInput`<sup>Optional</sup> <a name="replacementInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.replacementInput"></a>

```typescript
public readonly replacementInput: string;
```

- *Type:* string

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.selectorInput"></a>

```typescript
public readonly selectorInput: number;
```

- *Type:* number

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: number;
```

- *Type:* number

---

##### `usageInput`<sup>Optional</sup> <a name="usageInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.usageInput"></a>

```typescript
public readonly usageInput: number;
```

- *Type:* number

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: number;
```

- *Type:* number

---

##### `altitude`<sup>Required</sup> <a name="altitude" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.altitude"></a>

```typescript
public readonly altitude: number;
```

- *Type:* number

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digest"></a>

```typescript
public readonly digest: string;
```

- *Type:* string

---

##### `digestType`<sup>Required</sup> <a name="digestType" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestType"></a>

```typescript
public readonly digestType: number;
```

- *Type:* number

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `flags`<sup>Required</sup> <a name="flags" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.flags"></a>

```typescript
public readonly flags: string;
```

- *Type:* string

---

##### `keyTag`<sup>Required</sup> <a name="keyTag" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.keyTag"></a>

```typescript
public readonly keyTag: number;
```

- *Type:* number

---

##### `latDegrees`<sup>Required</sup> <a name="latDegrees" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDegrees"></a>

```typescript
public readonly latDegrees: number;
```

- *Type:* number

---

##### `latDirection`<sup>Required</sup> <a name="latDirection" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDirection"></a>

```typescript
public readonly latDirection: string;
```

- *Type:* string

---

##### `latMinutes`<sup>Required</sup> <a name="latMinutes" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latMinutes"></a>

```typescript
public readonly latMinutes: number;
```

- *Type:* number

---

##### `latSeconds`<sup>Required</sup> <a name="latSeconds" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latSeconds"></a>

```typescript
public readonly latSeconds: number;
```

- *Type:* number

---

##### `longDegrees`<sup>Required</sup> <a name="longDegrees" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDegrees"></a>

```typescript
public readonly longDegrees: number;
```

- *Type:* number

---

##### `longDirection`<sup>Required</sup> <a name="longDirection" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDirection"></a>

```typescript
public readonly longDirection: string;
```

- *Type:* string

---

##### `longMinutes`<sup>Required</sup> <a name="longMinutes" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longMinutes"></a>

```typescript
public readonly longMinutes: number;
```

- *Type:* number

---

##### `longSeconds`<sup>Required</sup> <a name="longSeconds" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longSeconds"></a>

```typescript
public readonly longSeconds: number;
```

- *Type:* number

---

##### `matchingType`<sup>Required</sup> <a name="matchingType" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.matchingType"></a>

```typescript
public readonly matchingType: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `precisionHorz`<sup>Required</sup> <a name="precisionHorz" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionHorz"></a>

```typescript
public readonly precisionHorz: number;
```

- *Type:* number

---

##### `precisionVert`<sup>Required</sup> <a name="precisionVert" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionVert"></a>

```typescript
public readonly precisionVert: number;
```

- *Type:* number

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.preference"></a>

```typescript
public readonly preference: number;
```

- *Type:* number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `proto`<sup>Required</sup> <a name="proto" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.proto"></a>

```typescript
public readonly proto: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protocol"></a>

```typescript
public readonly protocol: number;
```

- *Type:* number

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `replacement`<sup>Required</sup> <a name="replacement" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.replacement"></a>

```typescript
public readonly replacement: string;
```

- *Type:* string

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.selector"></a>

```typescript
public readonly selector: number;
```

- *Type:* number

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.type"></a>

```typescript
public readonly type: number;
```

- *Type:* number

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.usage"></a>

```typescript
public readonly usage: number;
```

- *Type:* number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RecordData;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a>

---


### RecordTimeoutsOutputReference <a name="RecordTimeoutsOutputReference" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.Initializer"></a>

```typescript
import { record } from '@cdktf/provider-cloudflare'

new record.RecordTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RecordTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a>

---



