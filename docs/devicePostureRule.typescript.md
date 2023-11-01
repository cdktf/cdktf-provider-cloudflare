# `cloudflare_device_posture_rule`

Refer to the Terraform Registory for docs: [`cloudflare_device_posture_rule`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule).

# `devicePostureRule` Submodule <a name="`devicePostureRule` Submodule" id="@cdktf/provider-cloudflare.devicePostureRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevicePostureRule <a name="DevicePostureRule" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule cloudflare_device_posture_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer"></a>

```typescript
import { devicePostureRule } from '@cdktf/provider-cloudflare'

new devicePostureRule.DevicePostureRule(scope: Construct, id: string, config: DevicePostureRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig">DevicePostureRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig">DevicePostureRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.putInput">putInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetExpiration">resetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetMatch">resetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetSchedule">resetSchedule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putInput` <a name="putInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.putInput"></a>

```typescript
public putInput(value: IResolvable | DevicePostureRuleInput[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.putInput.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>[]

---

##### `putMatch` <a name="putMatch" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.putMatch"></a>

```typescript
public putMatch(value: IResolvable | DevicePostureRuleMatch[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.putMatch.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExpiration` <a name="resetExpiration" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetExpiration"></a>

```typescript
public resetExpiration(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInput` <a name="resetInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetInput"></a>

```typescript
public resetInput(): void
```

##### `resetMatch` <a name="resetMatch" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetMatch"></a>

```typescript
public resetMatch(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevicePostureRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isConstruct"></a>

```typescript
import { devicePostureRule } from '@cdktf/provider-cloudflare'

devicePostureRule.DevicePostureRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isTerraformElement"></a>

```typescript
import { devicePostureRule } from '@cdktf/provider-cloudflare'

devicePostureRule.DevicePostureRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isTerraformResource"></a>

```typescript
import { devicePostureRule } from '@cdktf/provider-cloudflare'

devicePostureRule.DevicePostureRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.generateConfigForImport"></a>

```typescript
import { devicePostureRule } from '@cdktf/provider-cloudflare'

devicePostureRule.DevicePostureRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DevicePostureRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevicePostureRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevicePostureRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DevicePostureRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.input">input</a></code> | <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList">DevicePostureRuleInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.match">match</a></code> | <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList">DevicePostureRuleMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.expirationInput">expirationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.inputInput">inputInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.matchInput">matchInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.expiration">expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.input"></a>

```typescript
public readonly input: DevicePostureRuleInputList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList">DevicePostureRuleInputList</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.match"></a>

```typescript
public readonly match: DevicePostureRuleMatchList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList">DevicePostureRuleMatchList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expirationInput`<sup>Optional</sup> <a name="expirationInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.expirationInput"></a>

```typescript
public readonly expirationInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.inputInput"></a>

```typescript
public readonly inputInput: IResolvable | DevicePostureRuleInput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>[]

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.matchInput"></a>

```typescript
public readonly matchInput: IResolvable | DevicePostureRuleMatch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.expiration"></a>

```typescript
public readonly expiration: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevicePostureRuleConfig <a name="DevicePostureRuleConfig" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.Initializer"></a>

```typescript
import { devicePostureRule } from '@cdktf/provider-cloudflare'

const devicePostureRuleConfig: devicePostureRule.DevicePostureRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.accountId">accountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.type">type</a></code> | <code>string</code> | The device posture rule type. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#description DevicePostureRule#description}. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.expiration">expiration</a></code> | <code>string</code> | Expire posture results after the specified amount of time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#id DevicePostureRule#id}. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.input">input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>[]</code> | input block. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.match">match</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>[]</code> | match block. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.name">name</a></code> | <code>string</code> | Name of the device posture rule. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.schedule">schedule</a></code> | <code>string</code> | Tells the client when to run the device posture check. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#account_id DevicePostureRule#account_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The device posture rule type.

Available values: `serial_number`, `file`, `application`, `gateway`, `warp`, `domain_joined`, `os_version`, `disk_encryption`, `firewall`, `client_certificate`, `workspace_one`, `unique_client_id`, `crowdstrike_s2s`, `sentinelone`, `kolide`, `tanium_s2s`, `intune`, `sentinelone_s2s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#type DevicePostureRule#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#description DevicePostureRule#description}.

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.expiration"></a>

```typescript
public readonly expiration: string;
```

- *Type:* string

Expire posture results after the specified amount of time.

Must be in the format `1h` or `30m`. Valid units are `h` and `m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#expiration DevicePostureRule#expiration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#id DevicePostureRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.input"></a>

```typescript
public readonly input: IResolvable | DevicePostureRuleInput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>[]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#input DevicePostureRule#input}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.match"></a>

```typescript
public readonly match: IResolvable | DevicePostureRuleMatch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>[]

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#match DevicePostureRule#match}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the device posture rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#name DevicePostureRule#name}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleConfig.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

Tells the client when to run the device posture check.

Must be in the format `1h` or `30m`. Valid units are `h` and `m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#schedule DevicePostureRule#schedule}

---

### DevicePostureRuleInput <a name="DevicePostureRuleInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.Initializer"></a>

```typescript
import { devicePostureRule } from '@cdktf/provider-cloudflare'

const devicePostureRuleInput: devicePostureRule.DevicePostureRuleInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.activeThreats">activeThreats</a></code> | <code>number</code> | The number of active threats from SentinelOne. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.certificateId">certificateId</a></code> | <code>string</code> | The UUID of a Cloudflare managed certificate. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.checkDisks">checkDisks</a></code> | <code>string[]</code> | Specific volume(s) to check for encryption. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.cn">cn</a></code> | <code>string</code> | The common name for a certificate. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.complianceStatus">complianceStatus</a></code> | <code>string</code> | The workspace one device compliance status. Available values: `compliant`, `noncompliant`. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.connectionId">connectionId</a></code> | <code>string</code> | The workspace one connection id. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.countOperator">countOperator</a></code> | <code>string</code> | The count comparison operator for kolide. Available values: `>`, `>=`, `<`, `<=`, `==`. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.domain">domain</a></code> | <code>string</code> | The domain that the client must join. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.eidLastSeen">eidLastSeen</a></code> | <code>string</code> | The datetime a device last seen in RFC 3339 format from Tanium. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | True if the firewall must be enabled. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.exists">exists</a></code> | <code>boolean \| cdktf.IResolvable</code> | Checks if the file should exist. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.id">id</a></code> | <code>string</code> | The Teams List id. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.infected">infected</a></code> | <code>boolean \| cdktf.IResolvable</code> | True if SentinelOne device is infected. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.isActive">isActive</a></code> | <code>boolean \| cdktf.IResolvable</code> | True if SentinelOne device is active. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.issueCount">issueCount</a></code> | <code>string</code> | The number of issues for kolide. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.networkStatus">networkStatus</a></code> | <code>string</code> | The network status from SentinelOne. Available values: `connected`, `disconnected`, `disconnecting`, `connecting`. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.operator">operator</a></code> | <code>string</code> | The version comparison operator. Available values: `>`, `>=`, `<`, `<=`, `==`. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.os">os</a></code> | <code>string</code> | OS signal score from Crowdstrike. Value must be between 1 and 100. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.osDistroName">osDistroName</a></code> | <code>string</code> | The operating system excluding version information. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.osDistroRevision">osDistroRevision</a></code> | <code>string</code> | The operating system version excluding OS name information or release name. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.overall">overall</a></code> | <code>string</code> | Overall ZTA score from Crowdstrike. Value must be between 1 and 100. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.path">path</a></code> | <code>string</code> | The path to the file. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.requireAll">requireAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | True if all drives must be encrypted. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.riskLevel">riskLevel</a></code> | <code>string</code> | The risk level from Tanium. Available values: `low`, `medium`, `high`, `critical`. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.running">running</a></code> | <code>boolean \| cdktf.IResolvable</code> | Checks if the application should be running. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.sensorConfig">sensorConfig</a></code> | <code>string</code> | Sensor signal score from Crowdstrike. Value must be between 1 and 100. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.sha256">sha256</a></code> | <code>string</code> | The sha256 hash of the file. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.thumbprint">thumbprint</a></code> | <code>string</code> | The thumbprint of the file certificate. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.totalScore">totalScore</a></code> | <code>number</code> | The total score from Tanium. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.version">version</a></code> | <code>string</code> | The operating system semantic version. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.versionOperator">versionOperator</a></code> | <code>string</code> | The version comparison operator for crowdstrike. Available values: `>`, `>=`, `<`, `<=`, `==`. |

---

##### `activeThreats`<sup>Optional</sup> <a name="activeThreats" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.activeThreats"></a>

```typescript
public readonly activeThreats: number;
```

- *Type:* number

The number of active threats from SentinelOne.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#active_threats DevicePostureRule#active_threats}

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

The UUID of a Cloudflare managed certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#certificate_id DevicePostureRule#certificate_id}

---

##### `checkDisks`<sup>Optional</sup> <a name="checkDisks" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.checkDisks"></a>

```typescript
public readonly checkDisks: string[];
```

- *Type:* string[]

Specific volume(s) to check for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#check_disks DevicePostureRule#check_disks}

---

##### `cn`<sup>Optional</sup> <a name="cn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.cn"></a>

```typescript
public readonly cn: string;
```

- *Type:* string

The common name for a certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#cn DevicePostureRule#cn}

---

##### `complianceStatus`<sup>Optional</sup> <a name="complianceStatus" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.complianceStatus"></a>

```typescript
public readonly complianceStatus: string;
```

- *Type:* string

The workspace one device compliance status. Available values: `compliant`, `noncompliant`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#compliance_status DevicePostureRule#compliance_status}

---

##### `connectionId`<sup>Optional</sup> <a name="connectionId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

The workspace one connection id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#connection_id DevicePostureRule#connection_id}

---

##### `countOperator`<sup>Optional</sup> <a name="countOperator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.countOperator"></a>

```typescript
public readonly countOperator: string;
```

- *Type:* string

The count comparison operator for kolide. Available values: `>`, `>=`, `<`, `<=`, `==`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#count_operator DevicePostureRule#count_operator}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

The domain that the client must join.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#domain DevicePostureRule#domain}

---

##### `eidLastSeen`<sup>Optional</sup> <a name="eidLastSeen" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.eidLastSeen"></a>

```typescript
public readonly eidLastSeen: string;
```

- *Type:* string

The datetime a device last seen in RFC 3339 format from Tanium.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#eid_last_seen DevicePostureRule#eid_last_seen}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

True if the firewall must be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#enabled DevicePostureRule#enabled}

---

##### `exists`<sup>Optional</sup> <a name="exists" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.exists"></a>

```typescript
public readonly exists: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Checks if the file should exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#exists DevicePostureRule#exists}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Teams List id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#id DevicePostureRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `infected`<sup>Optional</sup> <a name="infected" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.infected"></a>

```typescript
public readonly infected: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

True if SentinelOne device is infected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#infected DevicePostureRule#infected}

---

##### `isActive`<sup>Optional</sup> <a name="isActive" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.isActive"></a>

```typescript
public readonly isActive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

True if SentinelOne device is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#is_active DevicePostureRule#is_active}

---

##### `issueCount`<sup>Optional</sup> <a name="issueCount" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.issueCount"></a>

```typescript
public readonly issueCount: string;
```

- *Type:* string

The number of issues for kolide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#issue_count DevicePostureRule#issue_count}

---

##### `networkStatus`<sup>Optional</sup> <a name="networkStatus" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.networkStatus"></a>

```typescript
public readonly networkStatus: string;
```

- *Type:* string

The network status from SentinelOne. Available values: `connected`, `disconnected`, `disconnecting`, `connecting`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#network_status DevicePostureRule#network_status}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

The version comparison operator. Available values: `>`, `>=`, `<`, `<=`, `==`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#operator DevicePostureRule#operator}

---

##### `os`<sup>Optional</sup> <a name="os" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.os"></a>

```typescript
public readonly os: string;
```

- *Type:* string

OS signal score from Crowdstrike. Value must be between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#os DevicePostureRule#os}

---

##### `osDistroName`<sup>Optional</sup> <a name="osDistroName" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.osDistroName"></a>

```typescript
public readonly osDistroName: string;
```

- *Type:* string

The operating system excluding version information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#os_distro_name DevicePostureRule#os_distro_name}

---

##### `osDistroRevision`<sup>Optional</sup> <a name="osDistroRevision" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.osDistroRevision"></a>

```typescript
public readonly osDistroRevision: string;
```

- *Type:* string

The operating system version excluding OS name information or release name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#os_distro_revision DevicePostureRule#os_distro_revision}

---

##### `overall`<sup>Optional</sup> <a name="overall" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.overall"></a>

```typescript
public readonly overall: string;
```

- *Type:* string

Overall ZTA score from Crowdstrike. Value must be between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#overall DevicePostureRule#overall}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path to the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#path DevicePostureRule#path}

---

##### `requireAll`<sup>Optional</sup> <a name="requireAll" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.requireAll"></a>

```typescript
public readonly requireAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

True if all drives must be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#require_all DevicePostureRule#require_all}

---

##### `riskLevel`<sup>Optional</sup> <a name="riskLevel" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.riskLevel"></a>

```typescript
public readonly riskLevel: string;
```

- *Type:* string

The risk level from Tanium. Available values: `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#risk_level DevicePostureRule#risk_level}

---

##### `running`<sup>Optional</sup> <a name="running" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.running"></a>

```typescript
public readonly running: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Checks if the application should be running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#running DevicePostureRule#running}

---

##### `sensorConfig`<sup>Optional</sup> <a name="sensorConfig" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.sensorConfig"></a>

```typescript
public readonly sensorConfig: string;
```

- *Type:* string

Sensor signal score from Crowdstrike. Value must be between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#sensor_config DevicePostureRule#sensor_config}

---

##### `sha256`<sup>Optional</sup> <a name="sha256" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.sha256"></a>

```typescript
public readonly sha256: string;
```

- *Type:* string

The sha256 hash of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#sha256 DevicePostureRule#sha256}

---

##### `thumbprint`<sup>Optional</sup> <a name="thumbprint" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

The thumbprint of the file certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#thumbprint DevicePostureRule#thumbprint}

---

##### `totalScore`<sup>Optional</sup> <a name="totalScore" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.totalScore"></a>

```typescript
public readonly totalScore: number;
```

- *Type:* number

The total score from Tanium.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#total_score DevicePostureRule#total_score}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The operating system semantic version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#version DevicePostureRule#version}

---

##### `versionOperator`<sup>Optional</sup> <a name="versionOperator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput.property.versionOperator"></a>

```typescript
public readonly versionOperator: string;
```

- *Type:* string

The version comparison operator for crowdstrike. Available values: `>`, `>=`, `<`, `<=`, `==`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#version_operator DevicePostureRule#version_operator}

---

### DevicePostureRuleMatch <a name="DevicePostureRuleMatch" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch.Initializer"></a>

```typescript
import { devicePostureRule } from '@cdktf/provider-cloudflare'

const devicePostureRuleMatch: devicePostureRule.DevicePostureRuleMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch.property.platform">platform</a></code> | <code>string</code> | The platform of the device. Available values: `windows`, `mac`, `linux`, `android`, `ios`, `chromeos`. |

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

The platform of the device. Available values: `windows`, `mac`, `linux`, `android`, `ios`, `chromeos`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/device_posture_rule#platform DevicePostureRule#platform}

---

## Classes <a name="Classes" id="Classes"></a>

### DevicePostureRuleInputList <a name="DevicePostureRuleInputList" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer"></a>

```typescript
import { devicePostureRule } from '@cdktf/provider-cloudflare'

new devicePostureRule.DevicePostureRuleInputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.get"></a>

```typescript
public get(index: number): DevicePostureRuleInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevicePostureRuleInput[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>[]

---


### DevicePostureRuleInputOutputReference <a name="DevicePostureRuleInputOutputReference" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer"></a>

```typescript
import { devicePostureRule } from '@cdktf/provider-cloudflare'

new devicePostureRule.DevicePostureRuleInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetActiveThreats">resetActiveThreats</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetCertificateId">resetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetCheckDisks">resetCheckDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetCn">resetCn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetComplianceStatus">resetComplianceStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetConnectionId">resetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetCountOperator">resetCountOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetEidLastSeen">resetEidLastSeen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetExists">resetExists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetInfected">resetInfected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetIsActive">resetIsActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetIssueCount">resetIssueCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetNetworkStatus">resetNetworkStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOs">resetOs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOsDistroName">resetOsDistroName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOsDistroRevision">resetOsDistroRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOverall">resetOverall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetRequireAll">resetRequireAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetRiskLevel">resetRiskLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetRunning">resetRunning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetSensorConfig">resetSensorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetSha256">resetSha256</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetThumbprint">resetThumbprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetTotalScore">resetTotalScore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetVersionOperator">resetVersionOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActiveThreats` <a name="resetActiveThreats" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetActiveThreats"></a>

```typescript
public resetActiveThreats(): void
```

##### `resetCertificateId` <a name="resetCertificateId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetCertificateId"></a>

```typescript
public resetCertificateId(): void
```

##### `resetCheckDisks` <a name="resetCheckDisks" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetCheckDisks"></a>

```typescript
public resetCheckDisks(): void
```

##### `resetCn` <a name="resetCn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetCn"></a>

```typescript
public resetCn(): void
```

##### `resetComplianceStatus` <a name="resetComplianceStatus" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetComplianceStatus"></a>

```typescript
public resetComplianceStatus(): void
```

##### `resetConnectionId` <a name="resetConnectionId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetConnectionId"></a>

```typescript
public resetConnectionId(): void
```

##### `resetCountOperator` <a name="resetCountOperator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetCountOperator"></a>

```typescript
public resetCountOperator(): void
```

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetEidLastSeen` <a name="resetEidLastSeen" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetEidLastSeen"></a>

```typescript
public resetEidLastSeen(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetExists` <a name="resetExists" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetExists"></a>

```typescript
public resetExists(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInfected` <a name="resetInfected" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetInfected"></a>

```typescript
public resetInfected(): void
```

##### `resetIsActive` <a name="resetIsActive" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetIsActive"></a>

```typescript
public resetIsActive(): void
```

##### `resetIssueCount` <a name="resetIssueCount" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetIssueCount"></a>

```typescript
public resetIssueCount(): void
```

##### `resetNetworkStatus` <a name="resetNetworkStatus" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetNetworkStatus"></a>

```typescript
public resetNetworkStatus(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetOs` <a name="resetOs" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOs"></a>

```typescript
public resetOs(): void
```

##### `resetOsDistroName` <a name="resetOsDistroName" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOsDistroName"></a>

```typescript
public resetOsDistroName(): void
```

##### `resetOsDistroRevision` <a name="resetOsDistroRevision" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOsDistroRevision"></a>

```typescript
public resetOsDistroRevision(): void
```

##### `resetOverall` <a name="resetOverall" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetOverall"></a>

```typescript
public resetOverall(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetRequireAll` <a name="resetRequireAll" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetRequireAll"></a>

```typescript
public resetRequireAll(): void
```

##### `resetRiskLevel` <a name="resetRiskLevel" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetRiskLevel"></a>

```typescript
public resetRiskLevel(): void
```

##### `resetRunning` <a name="resetRunning" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetRunning"></a>

```typescript
public resetRunning(): void
```

##### `resetSensorConfig` <a name="resetSensorConfig" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetSensorConfig"></a>

```typescript
public resetSensorConfig(): void
```

##### `resetSha256` <a name="resetSha256" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetSha256"></a>

```typescript
public resetSha256(): void
```

##### `resetThumbprint` <a name="resetThumbprint" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetThumbprint"></a>

```typescript
public resetThumbprint(): void
```

##### `resetTotalScore` <a name="resetTotalScore" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetTotalScore"></a>

```typescript
public resetTotalScore(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```

##### `resetVersionOperator` <a name="resetVersionOperator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.resetVersionOperator"></a>

```typescript
public resetVersionOperator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.activeThreatsInput">activeThreatsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.certificateIdInput">certificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.checkDisksInput">checkDisksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.cnInput">cnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.complianceStatusInput">complianceStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.countOperatorInput">countOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.eidLastSeenInput">eidLastSeenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.existsInput">existsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.infectedInput">infectedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.isActiveInput">isActiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.issueCountInput">issueCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.networkStatusInput">networkStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroNameInput">osDistroNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroRevisionInput">osDistroRevisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osInput">osInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.overallInput">overallInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.requireAllInput">requireAllInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.riskLevelInput">riskLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.runningInput">runningInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sensorConfigInput">sensorConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sha256Input">sha256Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.thumbprintInput">thumbprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.totalScoreInput">totalScoreInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.versionOperatorInput">versionOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.activeThreats">activeThreats</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.checkDisks">checkDisks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.cn">cn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.complianceStatus">complianceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.countOperator">countOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.eidLastSeen">eidLastSeen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.exists">exists</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.infected">infected</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.isActive">isActive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.issueCount">issueCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.networkStatus">networkStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.os">os</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroName">osDistroName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroRevision">osDistroRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.overall">overall</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.requireAll">requireAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.riskLevel">riskLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.running">running</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sensorConfig">sensorConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sha256">sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.thumbprint">thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.totalScore">totalScore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.versionOperator">versionOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeThreatsInput`<sup>Optional</sup> <a name="activeThreatsInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.activeThreatsInput"></a>

```typescript
public readonly activeThreatsInput: number;
```

- *Type:* number

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.certificateIdInput"></a>

```typescript
public readonly certificateIdInput: string;
```

- *Type:* string

---

##### `checkDisksInput`<sup>Optional</sup> <a name="checkDisksInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.checkDisksInput"></a>

```typescript
public readonly checkDisksInput: string[];
```

- *Type:* string[]

---

##### `cnInput`<sup>Optional</sup> <a name="cnInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.cnInput"></a>

```typescript
public readonly cnInput: string;
```

- *Type:* string

---

##### `complianceStatusInput`<sup>Optional</sup> <a name="complianceStatusInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.complianceStatusInput"></a>

```typescript
public readonly complianceStatusInput: string;
```

- *Type:* string

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `countOperatorInput`<sup>Optional</sup> <a name="countOperatorInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.countOperatorInput"></a>

```typescript
public readonly countOperatorInput: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `eidLastSeenInput`<sup>Optional</sup> <a name="eidLastSeenInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.eidLastSeenInput"></a>

```typescript
public readonly eidLastSeenInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `existsInput`<sup>Optional</sup> <a name="existsInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.existsInput"></a>

```typescript
public readonly existsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `infectedInput`<sup>Optional</sup> <a name="infectedInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.infectedInput"></a>

```typescript
public readonly infectedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isActiveInput`<sup>Optional</sup> <a name="isActiveInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.isActiveInput"></a>

```typescript
public readonly isActiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issueCountInput`<sup>Optional</sup> <a name="issueCountInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.issueCountInput"></a>

```typescript
public readonly issueCountInput: string;
```

- *Type:* string

---

##### `networkStatusInput`<sup>Optional</sup> <a name="networkStatusInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.networkStatusInput"></a>

```typescript
public readonly networkStatusInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `osDistroNameInput`<sup>Optional</sup> <a name="osDistroNameInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroNameInput"></a>

```typescript
public readonly osDistroNameInput: string;
```

- *Type:* string

---

##### `osDistroRevisionInput`<sup>Optional</sup> <a name="osDistroRevisionInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroRevisionInput"></a>

```typescript
public readonly osDistroRevisionInput: string;
```

- *Type:* string

---

##### `osInput`<sup>Optional</sup> <a name="osInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osInput"></a>

```typescript
public readonly osInput: string;
```

- *Type:* string

---

##### `overallInput`<sup>Optional</sup> <a name="overallInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.overallInput"></a>

```typescript
public readonly overallInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `requireAllInput`<sup>Optional</sup> <a name="requireAllInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.requireAllInput"></a>

```typescript
public readonly requireAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `riskLevelInput`<sup>Optional</sup> <a name="riskLevelInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.riskLevelInput"></a>

```typescript
public readonly riskLevelInput: string;
```

- *Type:* string

---

##### `runningInput`<sup>Optional</sup> <a name="runningInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.runningInput"></a>

```typescript
public readonly runningInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sensorConfigInput`<sup>Optional</sup> <a name="sensorConfigInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sensorConfigInput"></a>

```typescript
public readonly sensorConfigInput: string;
```

- *Type:* string

---

##### `sha256Input`<sup>Optional</sup> <a name="sha256Input" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sha256Input"></a>

```typescript
public readonly sha256Input: string;
```

- *Type:* string

---

##### `thumbprintInput`<sup>Optional</sup> <a name="thumbprintInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.thumbprintInput"></a>

```typescript
public readonly thumbprintInput: string;
```

- *Type:* string

---

##### `totalScoreInput`<sup>Optional</sup> <a name="totalScoreInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.totalScoreInput"></a>

```typescript
public readonly totalScoreInput: number;
```

- *Type:* number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `versionOperatorInput`<sup>Optional</sup> <a name="versionOperatorInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.versionOperatorInput"></a>

```typescript
public readonly versionOperatorInput: string;
```

- *Type:* string

---

##### `activeThreats`<sup>Required</sup> <a name="activeThreats" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.activeThreats"></a>

```typescript
public readonly activeThreats: number;
```

- *Type:* number

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `checkDisks`<sup>Required</sup> <a name="checkDisks" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.checkDisks"></a>

```typescript
public readonly checkDisks: string[];
```

- *Type:* string[]

---

##### `cn`<sup>Required</sup> <a name="cn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.cn"></a>

```typescript
public readonly cn: string;
```

- *Type:* string

---

##### `complianceStatus`<sup>Required</sup> <a name="complianceStatus" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.complianceStatus"></a>

```typescript
public readonly complianceStatus: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `countOperator`<sup>Required</sup> <a name="countOperator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.countOperator"></a>

```typescript
public readonly countOperator: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `eidLastSeen`<sup>Required</sup> <a name="eidLastSeen" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.eidLastSeen"></a>

```typescript
public readonly eidLastSeen: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exists`<sup>Required</sup> <a name="exists" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.exists"></a>

```typescript
public readonly exists: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `infected`<sup>Required</sup> <a name="infected" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.infected"></a>

```typescript
public readonly infected: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.isActive"></a>

```typescript
public readonly isActive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issueCount`<sup>Required</sup> <a name="issueCount" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.issueCount"></a>

```typescript
public readonly issueCount: string;
```

- *Type:* string

---

##### `networkStatus`<sup>Required</sup> <a name="networkStatus" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.networkStatus"></a>

```typescript
public readonly networkStatus: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.os"></a>

```typescript
public readonly os: string;
```

- *Type:* string

---

##### `osDistroName`<sup>Required</sup> <a name="osDistroName" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroName"></a>

```typescript
public readonly osDistroName: string;
```

- *Type:* string

---

##### `osDistroRevision`<sup>Required</sup> <a name="osDistroRevision" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.osDistroRevision"></a>

```typescript
public readonly osDistroRevision: string;
```

- *Type:* string

---

##### `overall`<sup>Required</sup> <a name="overall" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.overall"></a>

```typescript
public readonly overall: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `requireAll`<sup>Required</sup> <a name="requireAll" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.requireAll"></a>

```typescript
public readonly requireAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `riskLevel`<sup>Required</sup> <a name="riskLevel" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.riskLevel"></a>

```typescript
public readonly riskLevel: string;
```

- *Type:* string

---

##### `running`<sup>Required</sup> <a name="running" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.running"></a>

```typescript
public readonly running: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sensorConfig`<sup>Required</sup> <a name="sensorConfig" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sensorConfig"></a>

```typescript
public readonly sensorConfig: string;
```

- *Type:* string

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.sha256"></a>

```typescript
public readonly sha256: string;
```

- *Type:* string

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

---

##### `totalScore`<sup>Required</sup> <a name="totalScore" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.totalScore"></a>

```typescript
public readonly totalScore: number;
```

- *Type:* number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `versionOperator`<sup>Required</sup> <a name="versionOperator" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.versionOperator"></a>

```typescript
public readonly versionOperator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevicePostureRuleInput;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleInput">DevicePostureRuleInput</a>

---


### DevicePostureRuleMatchList <a name="DevicePostureRuleMatchList" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer"></a>

```typescript
import { devicePostureRule } from '@cdktf/provider-cloudflare'

new devicePostureRule.DevicePostureRuleMatchList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.get"></a>

```typescript
public get(index: number): DevicePostureRuleMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevicePostureRuleMatch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>[]

---


### DevicePostureRuleMatchOutputReference <a name="DevicePostureRuleMatchOutputReference" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer"></a>

```typescript
import { devicePostureRule } from '@cdktf/provider-cloudflare'

new devicePostureRule.DevicePostureRuleMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.resetPlatform">resetPlatform</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPlatform` <a name="resetPlatform" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.resetPlatform"></a>

```typescript
public resetPlatform(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.platformInput">platformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.platformInput"></a>

```typescript
public readonly platformInput: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevicePostureRuleMatch;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.devicePostureRule.DevicePostureRuleMatch">DevicePostureRuleMatch</a>

---



