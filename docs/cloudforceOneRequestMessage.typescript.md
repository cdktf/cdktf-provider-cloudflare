# `cloudforceOneRequestMessage` Submodule <a name="`cloudforceOneRequestMessage` Submodule" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudforceOneRequestMessage <a name="CloudforceOneRequestMessage" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/cloudforce_one_request_message cloudflare_cloudforce_one_request_message}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.Initializer"></a>

```typescript
import { cloudforceOneRequestMessage } from '@cdktf/provider-cloudflare'

new cloudforceOneRequestMessage.CloudforceOneRequestMessage(scope: Construct, id: string, config: CloudforceOneRequestMessageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessageConfig">CloudforceOneRequestMessageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessageConfig">CloudforceOneRequestMessageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.resetContent">resetContent</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetContent` <a name="resetContent" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.resetContent"></a>

```typescript
public resetContent(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudforceOneRequestMessage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.isConstruct"></a>

```typescript
import { cloudforceOneRequestMessage } from '@cdktf/provider-cloudflare'

cloudforceOneRequestMessage.CloudforceOneRequestMessage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.isTerraformElement"></a>

```typescript
import { cloudforceOneRequestMessage } from '@cdktf/provider-cloudflare'

cloudforceOneRequestMessage.CloudforceOneRequestMessage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.isTerraformResource"></a>

```typescript
import { cloudforceOneRequestMessage } from '@cdktf/provider-cloudflare'

cloudforceOneRequestMessage.CloudforceOneRequestMessage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.generateConfigForImport"></a>

```typescript
import { cloudforceOneRequestMessage } from '@cdktf/provider-cloudflare'

cloudforceOneRequestMessage.CloudforceOneRequestMessage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudforceOneRequestMessage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudforceOneRequestMessage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudforceOneRequestMessage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/cloudforce_one_request_message#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudforceOneRequestMessage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.author">author</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.isFollowOnRequest">isFollowOnRequest</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.updated">updated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.requestIdInput">requestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.requestId">requestId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `isFollowOnRequest`<sup>Required</sup> <a name="isFollowOnRequest" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.isFollowOnRequest"></a>

```typescript
public readonly isFollowOnRequest: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.updated"></a>

```typescript
public readonly updated: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `requestIdInput`<sup>Optional</sup> <a name="requestIdInput" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.requestIdInput"></a>

```typescript
public readonly requestIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `requestId`<sup>Required</sup> <a name="requestId" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.requestId"></a>

```typescript
public readonly requestId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudforceOneRequestMessageConfig <a name="CloudforceOneRequestMessageConfig" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessageConfig.Initializer"></a>

```typescript
import { cloudforceOneRequestMessage } from '@cdktf/provider-cloudflare'

const cloudforceOneRequestMessageConfig: cloudforceOneRequestMessage.CloudforceOneRequestMessageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessageConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessageConfig.property.requestId">requestId</a></code> | <code>string</code> | UUID. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessageConfig.property.content">content</a></code> | <code>string</code> | Content of message. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessageConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/cloudforce_one_request_message#account_id CloudforceOneRequestMessage#account_id}

---

##### `requestId`<sup>Required</sup> <a name="requestId" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessageConfig.property.requestId"></a>

```typescript
public readonly requestId: string;
```

- *Type:* string

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/cloudforce_one_request_message#request_id CloudforceOneRequestMessage#request_id}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.cloudforceOneRequestMessage.CloudforceOneRequestMessageConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Content of message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/cloudforce_one_request_message#content CloudforceOneRequestMessage#content}

---



