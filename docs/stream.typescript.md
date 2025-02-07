# `stream` Submodule <a name="`stream` Submodule" id="@cdktf/provider-cloudflare.stream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Stream <a name="Stream" id="@cdktf/provider-cloudflare.stream.Stream"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream cloudflare_stream}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.stream.Stream.Initializer"></a>

```typescript
import { stream } from '@cdktf/provider-cloudflare'

new stream.Stream(scope: Construct, id: string, config: StreamConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig">StreamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.stream.Stream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.stream.StreamConfig">StreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.resetAllowedOrigins">resetAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.resetCreator">resetCreator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.resetIdentifier">resetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.resetMaxDurationSeconds">resetMaxDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.resetMeta">resetMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.resetRequireSignedUrls">resetRequireSignedUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.resetScheduledDeletion">resetScheduledDeletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.resetThumbnailTimestampPct">resetThumbnailTimestampPct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.resetUploadExpiry">resetUploadExpiry</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.stream.Stream.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.stream.Stream.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.stream.Stream.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.stream.Stream.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.stream.Stream.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.stream.Stream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.stream.Stream.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.stream.Stream.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.stream.Stream.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.stream.Stream.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.stream.Stream.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.stream.Stream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.stream.Stream.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.Stream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.stream.Stream.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.Stream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.stream.Stream.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.Stream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.stream.Stream.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.Stream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.stream.Stream.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.Stream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.stream.Stream.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.Stream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.stream.Stream.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.Stream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.stream.Stream.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.Stream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.stream.Stream.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.Stream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.stream.Stream.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.stream.Stream.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.stream.Stream.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.stream.Stream.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.stream.Stream.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.Stream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.stream.Stream.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.stream.Stream.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.stream.Stream.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.stream.Stream.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.stream.Stream.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.stream.Stream.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.stream.Stream.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedOrigins` <a name="resetAllowedOrigins" id="@cdktf/provider-cloudflare.stream.Stream.resetAllowedOrigins"></a>

```typescript
public resetAllowedOrigins(): void
```

##### `resetCreator` <a name="resetCreator" id="@cdktf/provider-cloudflare.stream.Stream.resetCreator"></a>

```typescript
public resetCreator(): void
```

##### `resetIdentifier` <a name="resetIdentifier" id="@cdktf/provider-cloudflare.stream.Stream.resetIdentifier"></a>

```typescript
public resetIdentifier(): void
```

##### `resetMaxDurationSeconds` <a name="resetMaxDurationSeconds" id="@cdktf/provider-cloudflare.stream.Stream.resetMaxDurationSeconds"></a>

```typescript
public resetMaxDurationSeconds(): void
```

##### `resetMeta` <a name="resetMeta" id="@cdktf/provider-cloudflare.stream.Stream.resetMeta"></a>

```typescript
public resetMeta(): void
```

##### `resetRequireSignedUrls` <a name="resetRequireSignedUrls" id="@cdktf/provider-cloudflare.stream.Stream.resetRequireSignedUrls"></a>

```typescript
public resetRequireSignedUrls(): void
```

##### `resetScheduledDeletion` <a name="resetScheduledDeletion" id="@cdktf/provider-cloudflare.stream.Stream.resetScheduledDeletion"></a>

```typescript
public resetScheduledDeletion(): void
```

##### `resetThumbnailTimestampPct` <a name="resetThumbnailTimestampPct" id="@cdktf/provider-cloudflare.stream.Stream.resetThumbnailTimestampPct"></a>

```typescript
public resetThumbnailTimestampPct(): void
```

##### `resetUploadExpiry` <a name="resetUploadExpiry" id="@cdktf/provider-cloudflare.stream.Stream.resetUploadExpiry"></a>

```typescript
public resetUploadExpiry(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Stream resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.stream.Stream.isConstruct"></a>

```typescript
import { stream } from '@cdktf/provider-cloudflare'

stream.Stream.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.stream.Stream.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.stream.Stream.isTerraformElement"></a>

```typescript
import { stream } from '@cdktf/provider-cloudflare'

stream.Stream.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.stream.Stream.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.stream.Stream.isTerraformResource"></a>

```typescript
import { stream } from '@cdktf/provider-cloudflare'

stream.Stream.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.stream.Stream.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.stream.Stream.generateConfigForImport"></a>

```typescript
import { stream } from '@cdktf/provider-cloudflare'

stream.Stream.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Stream resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.stream.Stream.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.stream.Stream.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Stream to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.stream.Stream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Stream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.stream.Stream.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Stream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.input">input</a></code> | <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference">StreamInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.liveInput">liveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.modified">modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.playback">playback</a></code> | <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference">StreamPlaybackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.preview">preview</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.readyToStream">readyToStream</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.readyToStreamAt">readyToStreamAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.status">status</a></code> | <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference">StreamStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.thumbnail">thumbnail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.uploaded">uploaded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.watermark">watermark</a></code> | <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference">StreamWatermarkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.creatorInput">creatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.maxDurationSecondsInput">maxDurationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.metaInput">metaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.requireSignedUrlsInput">requireSignedUrlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.scheduledDeletionInput">scheduledDeletionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.thumbnailTimestampPctInput">thumbnailTimestampPctInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.uploadExpiryInput">uploadExpiryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.maxDurationSeconds">maxDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.meta">meta</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.requireSignedUrls">requireSignedUrls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.scheduledDeletion">scheduledDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.thumbnailTimestampPct">thumbnailTimestampPct</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.uploadExpiry">uploadExpiry</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.stream.Stream.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.stream.Stream.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.stream.Stream.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.stream.Stream.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.stream.Stream.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.stream.Stream.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.stream.Stream.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.stream.Stream.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.stream.Stream.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.stream.Stream.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.stream.Stream.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.stream.Stream.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.stream.Stream.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.stream.Stream.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.stream.Stream.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-cloudflare.stream.Stream.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-cloudflare.stream.Stream.property.input"></a>

```typescript
public readonly input: StreamInputOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference">StreamInputOutputReference</a>

---

##### `liveInput`<sup>Required</sup> <a name="liveInput" id="@cdktf/provider-cloudflare.stream.Stream.property.liveInput"></a>

```typescript
public readonly liveInput: string;
```

- *Type:* string

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktf/provider-cloudflare.stream.Stream.property.modified"></a>

```typescript
public readonly modified: string;
```

- *Type:* string

---

##### `playback`<sup>Required</sup> <a name="playback" id="@cdktf/provider-cloudflare.stream.Stream.property.playback"></a>

```typescript
public readonly playback: StreamPlaybackOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference">StreamPlaybackOutputReference</a>

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktf/provider-cloudflare.stream.Stream.property.preview"></a>

```typescript
public readonly preview: string;
```

- *Type:* string

---

##### `readyToStream`<sup>Required</sup> <a name="readyToStream" id="@cdktf/provider-cloudflare.stream.Stream.property.readyToStream"></a>

```typescript
public readonly readyToStream: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `readyToStreamAt`<sup>Required</sup> <a name="readyToStreamAt" id="@cdktf/provider-cloudflare.stream.Stream.property.readyToStreamAt"></a>

```typescript
public readonly readyToStreamAt: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-cloudflare.stream.Stream.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.stream.Stream.property.status"></a>

```typescript
public readonly status: StreamStatusOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference">StreamStatusOutputReference</a>

---

##### `thumbnail`<sup>Required</sup> <a name="thumbnail" id="@cdktf/provider-cloudflare.stream.Stream.property.thumbnail"></a>

```typescript
public readonly thumbnail: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-cloudflare.stream.Stream.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `uploaded`<sup>Required</sup> <a name="uploaded" id="@cdktf/provider-cloudflare.stream.Stream.property.uploaded"></a>

```typescript
public readonly uploaded: string;
```

- *Type:* string

---

##### `watermark`<sup>Required</sup> <a name="watermark" id="@cdktf/provider-cloudflare.stream.Stream.property.watermark"></a>

```typescript
public readonly watermark: StreamWatermarkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference">StreamWatermarkOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.stream.Stream.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-cloudflare.stream.Stream.property.allowedOriginsInput"></a>

```typescript
public readonly allowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `creatorInput`<sup>Optional</sup> <a name="creatorInput" id="@cdktf/provider-cloudflare.stream.Stream.property.creatorInput"></a>

```typescript
public readonly creatorInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-cloudflare.stream.Stream.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `maxDurationSecondsInput`<sup>Optional</sup> <a name="maxDurationSecondsInput" id="@cdktf/provider-cloudflare.stream.Stream.property.maxDurationSecondsInput"></a>

```typescript
public readonly maxDurationSecondsInput: number;
```

- *Type:* number

---

##### `metaInput`<sup>Optional</sup> <a name="metaInput" id="@cdktf/provider-cloudflare.stream.Stream.property.metaInput"></a>

```typescript
public readonly metaInput: string;
```

- *Type:* string

---

##### `requireSignedUrlsInput`<sup>Optional</sup> <a name="requireSignedUrlsInput" id="@cdktf/provider-cloudflare.stream.Stream.property.requireSignedUrlsInput"></a>

```typescript
public readonly requireSignedUrlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scheduledDeletionInput`<sup>Optional</sup> <a name="scheduledDeletionInput" id="@cdktf/provider-cloudflare.stream.Stream.property.scheduledDeletionInput"></a>

```typescript
public readonly scheduledDeletionInput: string;
```

- *Type:* string

---

##### `thumbnailTimestampPctInput`<sup>Optional</sup> <a name="thumbnailTimestampPctInput" id="@cdktf/provider-cloudflare.stream.Stream.property.thumbnailTimestampPctInput"></a>

```typescript
public readonly thumbnailTimestampPctInput: number;
```

- *Type:* number

---

##### `uploadExpiryInput`<sup>Optional</sup> <a name="uploadExpiryInput" id="@cdktf/provider-cloudflare.stream.Stream.property.uploadExpiryInput"></a>

```typescript
public readonly uploadExpiryInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.stream.Stream.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-cloudflare.stream.Stream.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-cloudflare.stream.Stream.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-cloudflare.stream.Stream.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `maxDurationSeconds`<sup>Required</sup> <a name="maxDurationSeconds" id="@cdktf/provider-cloudflare.stream.Stream.property.maxDurationSeconds"></a>

```typescript
public readonly maxDurationSeconds: number;
```

- *Type:* number

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-cloudflare.stream.Stream.property.meta"></a>

```typescript
public readonly meta: string;
```

- *Type:* string

---

##### `requireSignedUrls`<sup>Required</sup> <a name="requireSignedUrls" id="@cdktf/provider-cloudflare.stream.Stream.property.requireSignedUrls"></a>

```typescript
public readonly requireSignedUrls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scheduledDeletion`<sup>Required</sup> <a name="scheduledDeletion" id="@cdktf/provider-cloudflare.stream.Stream.property.scheduledDeletion"></a>

```typescript
public readonly scheduledDeletion: string;
```

- *Type:* string

---

##### `thumbnailTimestampPct`<sup>Required</sup> <a name="thumbnailTimestampPct" id="@cdktf/provider-cloudflare.stream.Stream.property.thumbnailTimestampPct"></a>

```typescript
public readonly thumbnailTimestampPct: number;
```

- *Type:* number

---

##### `uploadExpiry`<sup>Required</sup> <a name="uploadExpiry" id="@cdktf/provider-cloudflare.stream.Stream.property.uploadExpiry"></a>

```typescript
public readonly uploadExpiry: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.Stream.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.stream.Stream.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamConfig <a name="StreamConfig" id="@cdktf/provider-cloudflare.stream.StreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.stream.StreamConfig.Initializer"></a>

```typescript
import { stream } from '@cdktf/provider-cloudflare'

const streamConfig: stream.StreamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.accountId">accountId</a></code> | <code>string</code> | The account identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | Lists the origins allowed to display the video. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.creator">creator</a></code> | <code>string</code> | A user-defined identifier for the media creator. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.identifier">identifier</a></code> | <code>string</code> | A Cloudflare-generated unique identifier for a media item. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.maxDurationSeconds">maxDurationSeconds</a></code> | <code>number</code> | The maximum duration in seconds for a video upload. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.meta">meta</a></code> | <code>string</code> | A user modifiable key-value store used to reference other systems of record for managing videos. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.requireSignedUrls">requireSignedUrls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the video can be a accessed using the UID. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.scheduledDeletion">scheduledDeletion</a></code> | <code>string</code> | Indicates the date and time at which the video will be deleted. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.thumbnailTimestampPct">thumbnailTimestampPct</a></code> | <code>number</code> | The timestamp for a thumbnail image calculated as a percentage value of the video's duration. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamConfig.property.uploadExpiry">uploadExpiry</a></code> | <code>string</code> | The date and time when the video upload URL is no longer valid for direct user uploads. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream#account_id Stream#account_id}

---

##### `allowedOrigins`<sup>Optional</sup> <a name="allowedOrigins" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

Lists the origins allowed to display the video.

Enter allowed origin domains in an array and use `*` for wildcard subdomains. Empty arrays allow the video to be viewed on any origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream#allowed_origins Stream#allowed_origins}

---

##### `creator`<sup>Optional</sup> <a name="creator" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

A user-defined identifier for the media creator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream#creator Stream#creator}

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

A Cloudflare-generated unique identifier for a media item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream#identifier Stream#identifier}

---

##### `maxDurationSeconds`<sup>Optional</sup> <a name="maxDurationSeconds" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.maxDurationSeconds"></a>

```typescript
public readonly maxDurationSeconds: number;
```

- *Type:* number

The maximum duration in seconds for a video upload.

Can be set for a video that is not yet uploaded to limit its duration. Uploads that exceed the specified duration will fail during processing. A value of `-1` means the value is unknown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream#max_duration_seconds Stream#max_duration_seconds}

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.meta"></a>

```typescript
public readonly meta: string;
```

- *Type:* string

A user modifiable key-value store used to reference other systems of record for managing videos.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream#meta Stream#meta}

---

##### `requireSignedUrls`<sup>Optional</sup> <a name="requireSignedUrls" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.requireSignedUrls"></a>

```typescript
public readonly requireSignedUrls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the video can be a accessed using the UID.

When set to `true`, a signed token must be generated with a signing key to view the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream#require_signed_urls Stream#require_signed_urls}

---

##### `scheduledDeletion`<sup>Optional</sup> <a name="scheduledDeletion" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.scheduledDeletion"></a>

```typescript
public readonly scheduledDeletion: string;
```

- *Type:* string

Indicates the date and time at which the video will be deleted.

Omit the field to indicate no change, or include with a `null` value to remove an existing scheduled deletion. If specified, must be at least 30 days from upload time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream#scheduled_deletion Stream#scheduled_deletion}

---

##### `thumbnailTimestampPct`<sup>Optional</sup> <a name="thumbnailTimestampPct" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.thumbnailTimestampPct"></a>

```typescript
public readonly thumbnailTimestampPct: number;
```

- *Type:* number

The timestamp for a thumbnail image calculated as a percentage value of the video's duration.

To convert from a second-wise timestamp to a percentage, divide the desired timestamp by the total duration of the video.  If this value is not set, the default thumbnail image is taken from 0s of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream#thumbnail_timestamp_pct Stream#thumbnail_timestamp_pct}

---

##### `uploadExpiry`<sup>Optional</sup> <a name="uploadExpiry" id="@cdktf/provider-cloudflare.stream.StreamConfig.property.uploadExpiry"></a>

```typescript
public readonly uploadExpiry: string;
```

- *Type:* string

The date and time when the video upload URL is no longer valid for direct user uploads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/stream#upload_expiry Stream#upload_expiry}

---

### StreamInput <a name="StreamInput" id="@cdktf/provider-cloudflare.stream.StreamInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.stream.StreamInput.Initializer"></a>

```typescript
import { stream } from '@cdktf/provider-cloudflare'

const streamInput: stream.StreamInput = { ... }
```


### StreamPlayback <a name="StreamPlayback" id="@cdktf/provider-cloudflare.stream.StreamPlayback"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.stream.StreamPlayback.Initializer"></a>

```typescript
import { stream } from '@cdktf/provider-cloudflare'

const streamPlayback: stream.StreamPlayback = { ... }
```


### StreamStatus <a name="StreamStatus" id="@cdktf/provider-cloudflare.stream.StreamStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.stream.StreamStatus.Initializer"></a>

```typescript
import { stream } from '@cdktf/provider-cloudflare'

const streamStatus: stream.StreamStatus = { ... }
```


### StreamWatermark <a name="StreamWatermark" id="@cdktf/provider-cloudflare.stream.StreamWatermark"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.stream.StreamWatermark.Initializer"></a>

```typescript
import { stream } from '@cdktf/provider-cloudflare'

const streamWatermark: stream.StreamWatermark = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### StreamInputOutputReference <a name="StreamInputOutputReference" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.Initializer"></a>

```typescript
import { stream } from '@cdktf/provider-cloudflare'

new stream.StreamInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.property.height">height</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.property.width">width</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.stream.StreamInput">StreamInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.stream.StreamInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StreamInput;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.stream.StreamInput">StreamInput</a>

---


### StreamPlaybackOutputReference <a name="StreamPlaybackOutputReference" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.Initializer"></a>

```typescript
import { stream } from '@cdktf/provider-cloudflare'

new stream.StreamPlaybackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.property.dash">dash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.property.hls">hls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.stream.StreamPlayback">StreamPlayback</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dash`<sup>Required</sup> <a name="dash" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.property.dash"></a>

```typescript
public readonly dash: string;
```

- *Type:* string

---

##### `hls`<sup>Required</sup> <a name="hls" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.property.hls"></a>

```typescript
public readonly hls: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.stream.StreamPlaybackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StreamPlayback;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.stream.StreamPlayback">StreamPlayback</a>

---


### StreamStatusOutputReference <a name="StreamStatusOutputReference" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.Initializer"></a>

```typescript
import { stream } from '@cdktf/provider-cloudflare'

new stream.StreamStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.errorReasonCode">errorReasonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.errorReasonText">errorReasonText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.pctComplete">pctComplete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.stream.StreamStatus">StreamStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorReasonCode`<sup>Required</sup> <a name="errorReasonCode" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.errorReasonCode"></a>

```typescript
public readonly errorReasonCode: string;
```

- *Type:* string

---

##### `errorReasonText`<sup>Required</sup> <a name="errorReasonText" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.errorReasonText"></a>

```typescript
public readonly errorReasonText: string;
```

- *Type:* string

---

##### `pctComplete`<sup>Required</sup> <a name="pctComplete" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.pctComplete"></a>

```typescript
public readonly pctComplete: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.stream.StreamStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StreamStatus;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.stream.StreamStatus">StreamStatus</a>

---


### StreamWatermarkOutputReference <a name="StreamWatermarkOutputReference" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.Initializer"></a>

```typescript
import { stream } from '@cdktf/provider-cloudflare'

new stream.StreamWatermarkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.downloadedFrom">downloadedFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.height">height</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.opacity">opacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.padding">padding</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.position">position</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.scale">scale</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.width">width</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.stream.StreamWatermark">StreamWatermark</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `downloadedFrom`<sup>Required</sup> <a name="downloadedFrom" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.downloadedFrom"></a>

```typescript
public readonly downloadedFrom: string;
```

- *Type:* string

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `opacity`<sup>Required</sup> <a name="opacity" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.opacity"></a>

```typescript
public readonly opacity: number;
```

- *Type:* number

---

##### `padding`<sup>Required</sup> <a name="padding" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.padding"></a>

```typescript
public readonly padding: number;
```

- *Type:* number

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.position"></a>

```typescript
public readonly position: string;
```

- *Type:* string

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.scale"></a>

```typescript
public readonly scale: number;
```

- *Type:* number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.stream.StreamWatermarkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StreamWatermark;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.stream.StreamWatermark">StreamWatermark</a>

---



