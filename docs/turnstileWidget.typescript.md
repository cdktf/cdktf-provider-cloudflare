# `turnstileWidget` Submodule <a name="`turnstileWidget` Submodule" id="@cdktf/provider-cloudflare.turnstileWidget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TurnstileWidget <a name="TurnstileWidget" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/turnstile_widget cloudflare_turnstile_widget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer"></a>

```typescript
import { turnstileWidget } from '@cdktf/provider-cloudflare'

new turnstileWidget.TurnstileWidget(scope: Construct, id: string, config: TurnstileWidgetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig">TurnstileWidgetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig">TurnstileWidgetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetBotFightMode">resetBotFightMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetClearanceLevel">resetClearanceLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetEphemeralId">resetEphemeralId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetOfflabel">resetOfflabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBotFightMode` <a name="resetBotFightMode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetBotFightMode"></a>

```typescript
public resetBotFightMode(): void
```

##### `resetClearanceLevel` <a name="resetClearanceLevel" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetClearanceLevel"></a>

```typescript
public resetClearanceLevel(): void
```

##### `resetEphemeralId` <a name="resetEphemeralId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetEphemeralId"></a>

```typescript
public resetEphemeralId(): void
```

##### `resetOfflabel` <a name="resetOfflabel" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetOfflabel"></a>

```typescript
public resetOfflabel(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TurnstileWidget resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isConstruct"></a>

```typescript
import { turnstileWidget } from '@cdktf/provider-cloudflare'

turnstileWidget.TurnstileWidget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformElement"></a>

```typescript
import { turnstileWidget } from '@cdktf/provider-cloudflare'

turnstileWidget.TurnstileWidget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformResource"></a>

```typescript
import { turnstileWidget } from '@cdktf/provider-cloudflare'

turnstileWidget.TurnstileWidget.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport"></a>

```typescript
import { turnstileWidget } from '@cdktf/provider-cloudflare'

turnstileWidget.TurnstileWidget.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a TurnstileWidget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TurnstileWidget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TurnstileWidget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/turnstile_widget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TurnstileWidget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.sitekey">sitekey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.botFightModeInput">botFightModeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.clearanceLevelInput">clearanceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.domainsInput">domainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.ephemeralIdInput">ephemeralIdInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.offlabelInput">offlabelInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.botFightMode">botFightMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.clearanceLevel">clearanceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.ephemeralId">ephemeralId</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.offlabel">offlabel</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `sitekey`<sup>Required</sup> <a name="sitekey" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.sitekey"></a>

```typescript
public readonly sitekey: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `botFightModeInput`<sup>Optional</sup> <a name="botFightModeInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.botFightModeInput"></a>

```typescript
public readonly botFightModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clearanceLevelInput`<sup>Optional</sup> <a name="clearanceLevelInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.clearanceLevelInput"></a>

```typescript
public readonly clearanceLevelInput: string;
```

- *Type:* string

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.domainsInput"></a>

```typescript
public readonly domainsInput: string[];
```

- *Type:* string[]

---

##### `ephemeralIdInput`<sup>Optional</sup> <a name="ephemeralIdInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.ephemeralIdInput"></a>

```typescript
public readonly ephemeralIdInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `offlabelInput`<sup>Optional</sup> <a name="offlabelInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.offlabelInput"></a>

```typescript
public readonly offlabelInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `botFightMode`<sup>Required</sup> <a name="botFightMode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.botFightMode"></a>

```typescript
public readonly botFightMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clearanceLevel`<sup>Required</sup> <a name="clearanceLevel" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.clearanceLevel"></a>

```typescript
public readonly clearanceLevel: string;
```

- *Type:* string

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `ephemeralId`<sup>Required</sup> <a name="ephemeralId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.ephemeralId"></a>

```typescript
public readonly ephemeralId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `offlabel`<sup>Required</sup> <a name="offlabel" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.offlabel"></a>

```typescript
public readonly offlabel: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TurnstileWidgetConfig <a name="TurnstileWidgetConfig" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.Initializer"></a>

```typescript
import { turnstileWidget } from '@cdktf/provider-cloudflare'

const turnstileWidgetConfig: turnstileWidget.TurnstileWidgetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.domains">domains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/turnstile_widget#domains TurnstileWidget#domains}. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.mode">mode</a></code> | <code>string</code> | Widget Mode Available values: "non-interactive", "invisible", "managed". |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.name">name</a></code> | <code>string</code> | Human readable widget name. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.botFightMode">botFightMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | If bot_fight_mode is set to `true`, Cloudflare issues computationally expensive challenges in response to malicious bots (ENT only). |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.clearanceLevel">clearanceLevel</a></code> | <code>string</code> | If Turnstile is embedded on a Cloudflare site and the widget should grant challenge clearance, this setting can determine the clearance level to be set Available values: "no_clearance", "jschallenge", "managed", "interactive". |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.ephemeralId">ephemeralId</a></code> | <code>boolean \| cdktf.IResolvable</code> | Return the Ephemeral ID in /siteverify (ENT only). |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.offlabel">offlabel</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not show any Cloudflare branding on the widget (ENT only). |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.region">region</a></code> | <code>string</code> | Region where this widget can be used. This cannot be changed after creation. Available values: "world", "china". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/turnstile_widget#account_id TurnstileWidget#account_id}

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/turnstile_widget#domains TurnstileWidget#domains}.

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Widget Mode Available values: "non-interactive", "invisible", "managed".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/turnstile_widget#mode TurnstileWidget#mode}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Human readable widget name.

Not unique. Cloudflare suggests that you
set this to a meaningful string to make it easier to identify your
widget, and where it is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/turnstile_widget#name TurnstileWidget#name}

---

##### `botFightMode`<sup>Optional</sup> <a name="botFightMode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.botFightMode"></a>

```typescript
public readonly botFightMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If bot_fight_mode is set to `true`, Cloudflare issues computationally expensive challenges in response to malicious bots (ENT only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/turnstile_widget#bot_fight_mode TurnstileWidget#bot_fight_mode}

---

##### `clearanceLevel`<sup>Optional</sup> <a name="clearanceLevel" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.clearanceLevel"></a>

```typescript
public readonly clearanceLevel: string;
```

- *Type:* string

If Turnstile is embedded on a Cloudflare site and the widget should grant challenge clearance, this setting can determine the clearance level to be set Available values: "no_clearance", "jschallenge", "managed", "interactive".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/turnstile_widget#clearance_level TurnstileWidget#clearance_level}

---

##### `ephemeralId`<sup>Optional</sup> <a name="ephemeralId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.ephemeralId"></a>

```typescript
public readonly ephemeralId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Return the Ephemeral ID in /siteverify (ENT only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/turnstile_widget#ephemeral_id TurnstileWidget#ephemeral_id}

---

##### `offlabel`<sup>Optional</sup> <a name="offlabel" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.offlabel"></a>

```typescript
public readonly offlabel: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not show any Cloudflare branding on the widget (ENT only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/turnstile_widget#offlabel TurnstileWidget#offlabel}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this widget can be used. This cannot be changed after creation. Available values: "world", "china".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/turnstile_widget#region TurnstileWidget#region}

---



