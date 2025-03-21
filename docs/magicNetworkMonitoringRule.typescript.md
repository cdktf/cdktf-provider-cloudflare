# `magicNetworkMonitoringRule` Submodule <a name="`magicNetworkMonitoringRule` Submodule" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicNetworkMonitoringRule <a name="MagicNetworkMonitoringRule" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_network_monitoring_rule cloudflare_magic_network_monitoring_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer"></a>

```typescript
import { magicNetworkMonitoringRule } from '@cdktf/provider-cloudflare'

new magicNetworkMonitoringRule.MagicNetworkMonitoringRule(scope: Construct, id: string, config: MagicNetworkMonitoringRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig">MagicNetworkMonitoringRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig">MagicNetworkMonitoringRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetAutomaticAdvertisement">resetAutomaticAdvertisement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetBandwidth">resetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetPacketThreshold">resetPacketThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetPrefixes">resetPrefixes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAutomaticAdvertisement` <a name="resetAutomaticAdvertisement" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetAutomaticAdvertisement"></a>

```typescript
public resetAutomaticAdvertisement(): void
```

##### `resetBandwidth` <a name="resetBandwidth" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetBandwidth"></a>

```typescript
public resetBandwidth(): void
```

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetDuration"></a>

```typescript
public resetDuration(): void
```

##### `resetPacketThreshold` <a name="resetPacketThreshold" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetPacketThreshold"></a>

```typescript
public resetPacketThreshold(): void
```

##### `resetPrefixes` <a name="resetPrefixes" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetPrefixes"></a>

```typescript
public resetPrefixes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MagicNetworkMonitoringRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isConstruct"></a>

```typescript
import { magicNetworkMonitoringRule } from '@cdktf/provider-cloudflare'

magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformElement"></a>

```typescript
import { magicNetworkMonitoringRule } from '@cdktf/provider-cloudflare'

magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformResource"></a>

```typescript
import { magicNetworkMonitoringRule } from '@cdktf/provider-cloudflare'

magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport"></a>

```typescript
import { magicNetworkMonitoringRule } from '@cdktf/provider-cloudflare'

magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MagicNetworkMonitoringRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MagicNetworkMonitoringRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MagicNetworkMonitoringRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_network_monitoring_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MagicNetworkMonitoringRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidthThreshold">bandwidthThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixMatch">prefixMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.zscoreSensitivity">zscoreSensitivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.zscoreTarget">zscoreTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.automaticAdvertisementInput">automaticAdvertisementInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidthInput">bandwidthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.packetThresholdInput">packetThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixesInput">prefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.automaticAdvertisement">automaticAdvertisement</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidth">bandwidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.packetThreshold">packetThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixes">prefixes</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bandwidthThreshold`<sup>Required</sup> <a name="bandwidthThreshold" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidthThreshold"></a>

```typescript
public readonly bandwidthThreshold: number;
```

- *Type:* number

---

##### `prefixMatch`<sup>Required</sup> <a name="prefixMatch" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixMatch"></a>

```typescript
public readonly prefixMatch: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `zscoreSensitivity`<sup>Required</sup> <a name="zscoreSensitivity" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.zscoreSensitivity"></a>

```typescript
public readonly zscoreSensitivity: string;
```

- *Type:* string

---

##### `zscoreTarget`<sup>Required</sup> <a name="zscoreTarget" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.zscoreTarget"></a>

```typescript
public readonly zscoreTarget: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `automaticAdvertisementInput`<sup>Optional</sup> <a name="automaticAdvertisementInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.automaticAdvertisementInput"></a>

```typescript
public readonly automaticAdvertisementInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bandwidthInput`<sup>Optional</sup> <a name="bandwidthInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidthInput"></a>

```typescript
public readonly bandwidthInput: number;
```

- *Type:* number

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `packetThresholdInput`<sup>Optional</sup> <a name="packetThresholdInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.packetThresholdInput"></a>

```typescript
public readonly packetThresholdInput: number;
```

- *Type:* number

---

##### `prefixesInput`<sup>Optional</sup> <a name="prefixesInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixesInput"></a>

```typescript
public readonly prefixesInput: string[];
```

- *Type:* string[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `automaticAdvertisement`<sup>Required</sup> <a name="automaticAdvertisement" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.automaticAdvertisement"></a>

```typescript
public readonly automaticAdvertisement: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidth"></a>

```typescript
public readonly bandwidth: number;
```

- *Type:* number

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `packetThreshold`<sup>Required</sup> <a name="packetThreshold" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.packetThreshold"></a>

```typescript
public readonly packetThreshold: number;
```

- *Type:* number

---

##### `prefixes`<sup>Required</sup> <a name="prefixes" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixes"></a>

```typescript
public readonly prefixes: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MagicNetworkMonitoringRuleConfig <a name="MagicNetworkMonitoringRuleConfig" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.Initializer"></a>

```typescript
import { magicNetworkMonitoringRule } from '@cdktf/provider-cloudflare'

const magicNetworkMonitoringRuleConfig: magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_network_monitoring_rule#account_id MagicNetworkMonitoringRule#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.id">id</a></code> | <code>string</code> | The id of the rule. Must be unique. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.name">name</a></code> | <code>string</code> | The name of the rule. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.automaticAdvertisement">automaticAdvertisement</a></code> | <code>boolean \| cdktf.IResolvable</code> | Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.bandwidth">bandwidth</a></code> | <code>number</code> | The number of bits per second for the rule. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.duration">duration</a></code> | <code>string</code> | The amount of time that the rule threshold must be exceeded to send an alert notification. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.packetThreshold">packetThreshold</a></code> | <code>number</code> | The number of packets per second for the rule. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.prefixes">prefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_network_monitoring_rule#prefixes MagicNetworkMonitoringRule#prefixes}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_network_monitoring_rule#account_id MagicNetworkMonitoringRule#account_id}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The id of the rule. Must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_network_monitoring_rule#id MagicNetworkMonitoringRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the rule.

Must be unique. Supports characters A-Z, a-z, 0-9, underscore (_), dash (-), period (.), and tilde (~). You can’t have a space in the rule name. Max 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_network_monitoring_rule#name MagicNetworkMonitoringRule#name}

---

##### `automaticAdvertisement`<sup>Optional</sup> <a name="automaticAdvertisement" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.automaticAdvertisement"></a>

```typescript
public readonly automaticAdvertisement: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered.

Only available for users of Magic Transit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_network_monitoring_rule#automatic_advertisement MagicNetworkMonitoringRule#automatic_advertisement}

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.bandwidth"></a>

```typescript
public readonly bandwidth: number;
```

- *Type:* number

The number of bits per second for the rule.

When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_network_monitoring_rule#bandwidth MagicNetworkMonitoringRule#bandwidth}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

The amount of time that the rule threshold must be exceeded to send an alert notification.

The final value must be equivalent to one of the following 8 values ["1m","5m","10m","15m","20m","30m","45m","60m"].
Available values: "1m", "5m", "10m", "15m", "20m", "30m", "45m", "60m".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_network_monitoring_rule#duration MagicNetworkMonitoringRule#duration}

---

##### `packetThreshold`<sup>Optional</sup> <a name="packetThreshold" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.packetThreshold"></a>

```typescript
public readonly packetThreshold: number;
```

- *Type:* number

The number of packets per second for the rule.

When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_network_monitoring_rule#packet_threshold MagicNetworkMonitoringRule#packet_threshold}

---

##### `prefixes`<sup>Optional</sup> <a name="prefixes" id="@cdktf/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.prefixes"></a>

```typescript
public readonly prefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/magic_network_monitoring_rule#prefixes MagicNetworkMonitoringRule#prefixes}.

---



