# `userAgentBlockingRule` Submodule <a name="`userAgentBlockingRule` Submodule" id="@cdktf/provider-cloudflare.userAgentBlockingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserAgentBlockingRule <a name="UserAgentBlockingRule" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/user_agent_blocking_rule cloudflare_user_agent_blocking_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.Initializer"></a>

```typescript
import { userAgentBlockingRule } from '@cdktf/provider-cloudflare'

new userAgentBlockingRule.UserAgentBlockingRule(scope: Construct, id: string, config: UserAgentBlockingRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig">UserAgentBlockingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig">UserAgentBlockingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.resetPaused">resetPaused</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.putConfiguration"></a>

```typescript
public putConfiguration(value: UserAgentBlockingRuleConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfiguration">UserAgentBlockingRuleConfiguration</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetPaused` <a name="resetPaused" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.resetPaused"></a>

```typescript
public resetPaused(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a UserAgentBlockingRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.isConstruct"></a>

```typescript
import { userAgentBlockingRule } from '@cdktf/provider-cloudflare'

userAgentBlockingRule.UserAgentBlockingRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.isTerraformElement"></a>

```typescript
import { userAgentBlockingRule } from '@cdktf/provider-cloudflare'

userAgentBlockingRule.UserAgentBlockingRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.isTerraformResource"></a>

```typescript
import { userAgentBlockingRule } from '@cdktf/provider-cloudflare'

userAgentBlockingRule.UserAgentBlockingRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.generateConfigForImport"></a>

```typescript
import { userAgentBlockingRule } from '@cdktf/provider-cloudflare'

userAgentBlockingRule.UserAgentBlockingRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a UserAgentBlockingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the UserAgentBlockingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing UserAgentBlockingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/user_agent_blocking_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the UserAgentBlockingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference">UserAgentBlockingRuleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.configurationInput">configurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfiguration">UserAgentBlockingRuleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.pausedInput">pausedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.paused">paused</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.configuration"></a>

```typescript
public readonly configuration: UserAgentBlockingRuleConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference">UserAgentBlockingRuleConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.configurationInput"></a>

```typescript
public readonly configurationInput: IResolvable | UserAgentBlockingRuleConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfiguration">UserAgentBlockingRuleConfiguration</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `pausedInput`<sup>Optional</sup> <a name="pausedInput" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.pausedInput"></a>

```typescript
public readonly pausedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.paused"></a>

```typescript
public readonly paused: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UserAgentBlockingRuleConfig <a name="UserAgentBlockingRuleConfig" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.Initializer"></a>

```typescript
import { userAgentBlockingRule } from '@cdktf/provider-cloudflare'

const userAgentBlockingRuleConfig: userAgentBlockingRule.UserAgentBlockingRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfiguration">UserAgentBlockingRuleConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/user_agent_blocking_rule#configuration UserAgentBlockingRule#configuration}. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.mode">mode</a></code> | <code>string</code> | The action to apply to a matched request. Available values: "block", "challenge", "whitelist", "js_challenge", "managed_challenge". |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Defines an identifier. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.description">description</a></code> | <code>string</code> | An informative summary of the rule. This value is sanitized and any tags will be removed. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.paused">paused</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, indicates that the rule is currently paused. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.configuration"></a>

```typescript
public readonly configuration: UserAgentBlockingRuleConfiguration;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfiguration">UserAgentBlockingRuleConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/user_agent_blocking_rule#configuration UserAgentBlockingRule#configuration}.

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The action to apply to a matched request. Available values: "block", "challenge", "whitelist", "js_challenge", "managed_challenge".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/user_agent_blocking_rule#mode UserAgentBlockingRule#mode}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Defines an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/user_agent_blocking_rule#zone_id UserAgentBlockingRule#zone_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An informative summary of the rule. This value is sanitized and any tags will be removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/user_agent_blocking_rule#description UserAgentBlockingRule#description}

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfig.property.paused"></a>

```typescript
public readonly paused: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, indicates that the rule is currently paused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/user_agent_blocking_rule#paused UserAgentBlockingRule#paused}

---

### UserAgentBlockingRuleConfiguration <a name="UserAgentBlockingRuleConfiguration" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfiguration.Initializer"></a>

```typescript
import { userAgentBlockingRule } from '@cdktf/provider-cloudflare'

const userAgentBlockingRuleConfiguration: userAgentBlockingRule.UserAgentBlockingRuleConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfiguration.property.target">target</a></code> | <code>string</code> | The configuration target. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfiguration.property.value">value</a></code> | <code>string</code> | the user agent to exactly match. |

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfiguration.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

The configuration target.

You must set the target to `ua` when specifying a user agent in the rule.
Available values: "ua".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/user_agent_blocking_rule#target UserAgentBlockingRule#target}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfiguration.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

the user agent to exactly match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/user_agent_blocking_rule#value UserAgentBlockingRule#value}

---

## Classes <a name="Classes" id="Classes"></a>

### UserAgentBlockingRuleConfigurationOutputReference <a name="UserAgentBlockingRuleConfigurationOutputReference" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.Initializer"></a>

```typescript
import { userAgentBlockingRule } from '@cdktf/provider-cloudflare'

new userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfiguration">UserAgentBlockingRuleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UserAgentBlockingRuleConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.userAgentBlockingRule.UserAgentBlockingRuleConfiguration">UserAgentBlockingRuleConfiguration</a>

---



