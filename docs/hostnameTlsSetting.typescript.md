# `hostnameTlsSetting` Submodule <a name="`hostnameTlsSetting` Submodule" id="@cdktf/provider-cloudflare.hostnameTlsSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HostnameTlsSetting <a name="HostnameTlsSetting" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/hostname_tls_setting cloudflare_hostname_tls_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.Initializer"></a>

```typescript
import { hostnameTlsSetting } from '@cdktf/provider-cloudflare'

new hostnameTlsSetting.HostnameTlsSetting(scope: Construct, id: string, config: HostnameTlsSettingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSettingConfig">HostnameTlsSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSettingConfig">HostnameTlsSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HostnameTlsSetting resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.isConstruct"></a>

```typescript
import { hostnameTlsSetting } from '@cdktf/provider-cloudflare'

hostnameTlsSetting.HostnameTlsSetting.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.isTerraformElement"></a>

```typescript
import { hostnameTlsSetting } from '@cdktf/provider-cloudflare'

hostnameTlsSetting.HostnameTlsSetting.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.isTerraformResource"></a>

```typescript
import { hostnameTlsSetting } from '@cdktf/provider-cloudflare'

hostnameTlsSetting.HostnameTlsSetting.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.generateConfigForImport"></a>

```typescript
import { hostnameTlsSetting } from '@cdktf/provider-cloudflare'

hostnameTlsSetting.HostnameTlsSetting.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a HostnameTlsSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HostnameTlsSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HostnameTlsSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/hostname_tls_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HostnameTlsSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.settingIdInput">settingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.valueInput">valueInput</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.settingId">settingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.value">value</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `settingIdInput`<sup>Optional</sup> <a name="settingIdInput" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.settingIdInput"></a>

```typescript
public readonly settingIdInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.valueInput"></a>

```typescript
public readonly valueInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `settingId`<sup>Required</sup> <a name="settingId" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.settingId"></a>

```typescript
public readonly settingId: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.value"></a>

```typescript
public readonly value: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSetting.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HostnameTlsSettingConfig <a name="HostnameTlsSettingConfig" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSettingConfig.Initializer"></a>

```typescript
import { hostnameTlsSetting } from '@cdktf/provider-cloudflare'

const hostnameTlsSettingConfig: hostnameTlsSetting.HostnameTlsSettingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSettingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSettingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSettingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSettingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSettingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSettingConfig.property.hostname">hostname</a></code> | <code>string</code> | The hostname for which the tls settings are set. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSettingConfig.property.settingId">settingId</a></code> | <code>string</code> | The TLS Setting name. Available values: "ciphers", "min_tls_version", "http2". |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSettingConfig.property.value">value</a></code> | <code>{[ key: string ]: any}</code> | The tls setting value. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSettingConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSettingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSettingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSettingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSettingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSettingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSettingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSettingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSettingConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

The hostname for which the tls settings are set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/hostname_tls_setting#hostname HostnameTlsSetting#hostname}

---

##### `settingId`<sup>Required</sup> <a name="settingId" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSettingConfig.property.settingId"></a>

```typescript
public readonly settingId: string;
```

- *Type:* string

The TLS Setting name. Available values: "ciphers", "min_tls_version", "http2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/hostname_tls_setting#setting_id HostnameTlsSetting#setting_id}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSettingConfig.property.value"></a>

```typescript
public readonly value: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

The tls setting value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/hostname_tls_setting#value HostnameTlsSetting#value}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.hostnameTlsSetting.HostnameTlsSettingConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/hostname_tls_setting#zone_id HostnameTlsSetting#zone_id}

---



