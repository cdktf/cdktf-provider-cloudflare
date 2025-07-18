# `loadBalancerMonitor` Submodule <a name="`loadBalancerMonitor` Submodule" id="@cdktf/provider-cloudflare.loadBalancerMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerMonitor <a name="LoadBalancerMonitor" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor cloudflare_load_balancer_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer"></a>

```typescript
import { loadBalancerMonitor } from '@cdktf/provider-cloudflare'

new loadBalancerMonitor.LoadBalancerMonitor(scope: Construct, id: string, config: LoadBalancerMonitorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig">LoadBalancerMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig">LoadBalancerMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetAllowInsecure">resetAllowInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetConsecutiveDown">resetConsecutiveDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetConsecutiveUp">resetConsecutiveUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetExpectedBody">resetExpectedBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetExpectedCodes">resetExpectedCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetFollowRedirects">resetFollowRedirects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetProbeZone">resetProbeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowInsecure` <a name="resetAllowInsecure" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetAllowInsecure"></a>

```typescript
public resetAllowInsecure(): void
```

##### `resetConsecutiveDown` <a name="resetConsecutiveDown" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetConsecutiveDown"></a>

```typescript
public resetConsecutiveDown(): void
```

##### `resetConsecutiveUp` <a name="resetConsecutiveUp" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetConsecutiveUp"></a>

```typescript
public resetConsecutiveUp(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExpectedBody` <a name="resetExpectedBody" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetExpectedBody"></a>

```typescript
public resetExpectedBody(): void
```

##### `resetExpectedCodes` <a name="resetExpectedCodes" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetExpectedCodes"></a>

```typescript
public resetExpectedCodes(): void
```

##### `resetFollowRedirects` <a name="resetFollowRedirects" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetFollowRedirects"></a>

```typescript
public resetFollowRedirects(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProbeZone` <a name="resetProbeZone" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetProbeZone"></a>

```typescript
public resetProbeZone(): void
```

##### `resetRetries` <a name="resetRetries" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetRetries"></a>

```typescript
public resetRetries(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LoadBalancerMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.isConstruct"></a>

```typescript
import { loadBalancerMonitor } from '@cdktf/provider-cloudflare'

loadBalancerMonitor.LoadBalancerMonitor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.isTerraformElement"></a>

```typescript
import { loadBalancerMonitor } from '@cdktf/provider-cloudflare'

loadBalancerMonitor.LoadBalancerMonitor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.isTerraformResource"></a>

```typescript
import { loadBalancerMonitor } from '@cdktf/provider-cloudflare'

loadBalancerMonitor.LoadBalancerMonitor.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.generateConfigForImport"></a>

```typescript
import { loadBalancerMonitor } from '@cdktf/provider-cloudflare'

loadBalancerMonitor.LoadBalancerMonitor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LoadBalancerMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoadBalancerMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoadBalancerMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancerMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.allowInsecureInput">allowInsecureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.consecutiveDownInput">consecutiveDownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.consecutiveUpInput">consecutiveUpInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.expectedBodyInput">expectedBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.expectedCodesInput">expectedCodesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.followRedirectsInput">followRedirectsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.headerInput">headerInput</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.probeZoneInput">probeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.retriesInput">retriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.allowInsecure">allowInsecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.consecutiveDown">consecutiveDown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.consecutiveUp">consecutiveUp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.expectedBody">expectedBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.expectedCodes">expectedCodes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.followRedirects">followRedirects</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.header">header</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.probeZone">probeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `allowInsecureInput`<sup>Optional</sup> <a name="allowInsecureInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.allowInsecureInput"></a>

```typescript
public readonly allowInsecureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `consecutiveDownInput`<sup>Optional</sup> <a name="consecutiveDownInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.consecutiveDownInput"></a>

```typescript
public readonly consecutiveDownInput: number;
```

- *Type:* number

---

##### `consecutiveUpInput`<sup>Optional</sup> <a name="consecutiveUpInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.consecutiveUpInput"></a>

```typescript
public readonly consecutiveUpInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expectedBodyInput`<sup>Optional</sup> <a name="expectedBodyInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.expectedBodyInput"></a>

```typescript
public readonly expectedBodyInput: string;
```

- *Type:* string

---

##### `expectedCodesInput`<sup>Optional</sup> <a name="expectedCodesInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.expectedCodesInput"></a>

```typescript
public readonly expectedCodesInput: string;
```

- *Type:* string

---

##### `followRedirectsInput`<sup>Optional</sup> <a name="followRedirectsInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.followRedirectsInput"></a>

```typescript
public readonly followRedirectsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.headerInput"></a>

```typescript
public readonly headerInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string[]}

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `probeZoneInput`<sup>Optional</sup> <a name="probeZoneInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.probeZoneInput"></a>

```typescript
public readonly probeZoneInput: string;
```

- *Type:* string

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.retriesInput"></a>

```typescript
public readonly retriesInput: number;
```

- *Type:* number

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `allowInsecure`<sup>Required</sup> <a name="allowInsecure" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.allowInsecure"></a>

```typescript
public readonly allowInsecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `consecutiveDown`<sup>Required</sup> <a name="consecutiveDown" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.consecutiveDown"></a>

```typescript
public readonly consecutiveDown: number;
```

- *Type:* number

---

##### `consecutiveUp`<sup>Required</sup> <a name="consecutiveUp" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.consecutiveUp"></a>

```typescript
public readonly consecutiveUp: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expectedBody`<sup>Required</sup> <a name="expectedBody" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.expectedBody"></a>

```typescript
public readonly expectedBody: string;
```

- *Type:* string

---

##### `expectedCodes`<sup>Required</sup> <a name="expectedCodes" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.expectedCodes"></a>

```typescript
public readonly expectedCodes: string;
```

- *Type:* string

---

##### `followRedirects`<sup>Required</sup> <a name="followRedirects" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.followRedirects"></a>

```typescript
public readonly followRedirects: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.header"></a>

```typescript
public readonly header: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string[]}

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `probeZone`<sup>Required</sup> <a name="probeZone" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.probeZone"></a>

```typescript
public readonly probeZone: string;
```

- *Type:* string

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerMonitorConfig <a name="LoadBalancerMonitorConfig" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.Initializer"></a>

```typescript
import { loadBalancerMonitor } from '@cdktf/provider-cloudflare'

const loadBalancerMonitorConfig: loadBalancerMonitor.LoadBalancerMonitorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.allowInsecure">allowInsecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not validate the certificate when monitor use HTTPS. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.consecutiveDown">consecutiveDown</a></code> | <code>number</code> | To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.consecutiveUp">consecutiveUp</a></code> | <code>number</code> | To be marked healthy the monitored origin must pass this healthcheck N consecutive times. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.description">description</a></code> | <code>string</code> | Object description. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.expectedBody">expectedBody</a></code> | <code>string</code> | A case-insensitive sub-string to look for in the response body. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.expectedCodes">expectedCodes</a></code> | <code>string</code> | The expected HTTP response code or code range of the health check. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.followRedirects">followRedirects</a></code> | <code>boolean \| cdktf.IResolvable</code> | Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.header">header</a></code> | <code>cdktf.IResolvable \| {[ key: string ]: string[]}</code> | The HTTP request headers to send in the health check. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.interval">interval</a></code> | <code>number</code> | The interval between each health check. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.method">method</a></code> | <code>string</code> | The method to use for the health check. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.path">path</a></code> | <code>string</code> | The endpoint path you want to conduct a health check against. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.port">port</a></code> | <code>number</code> | The port number to connect to for the health check. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.probeZone">probeZone</a></code> | <code>string</code> | Assign this monitor to emulate the specified zone while probing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.retries">retries</a></code> | <code>number</code> | The number of retries to attempt in case of a timeout before marking the origin as unhealthy. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.timeout">timeout</a></code> | <code>number</code> | The timeout (in seconds) before marking the health check as failed. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.type">type</a></code> | <code>string</code> | The protocol to use for the health check. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#account_id LoadBalancerMonitor#account_id}

---

##### `allowInsecure`<sup>Optional</sup> <a name="allowInsecure" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.allowInsecure"></a>

```typescript
public readonly allowInsecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not validate the certificate when monitor use HTTPS.

This parameter is currently only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#allow_insecure LoadBalancerMonitor#allow_insecure}

---

##### `consecutiveDown`<sup>Optional</sup> <a name="consecutiveDown" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.consecutiveDown"></a>

```typescript
public readonly consecutiveDown: number;
```

- *Type:* number

To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#consecutive_down LoadBalancerMonitor#consecutive_down}

---

##### `consecutiveUp`<sup>Optional</sup> <a name="consecutiveUp" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.consecutiveUp"></a>

```typescript
public readonly consecutiveUp: number;
```

- *Type:* number

To be marked healthy the monitored origin must pass this healthcheck N consecutive times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#consecutive_up LoadBalancerMonitor#consecutive_up}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Object description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#description LoadBalancerMonitor#description}

---

##### `expectedBody`<sup>Optional</sup> <a name="expectedBody" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.expectedBody"></a>

```typescript
public readonly expectedBody: string;
```

- *Type:* string

A case-insensitive sub-string to look for in the response body.

If this string is not found, the origin will be marked as unhealthy. This parameter is only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#expected_body LoadBalancerMonitor#expected_body}

---

##### `expectedCodes`<sup>Optional</sup> <a name="expectedCodes" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.expectedCodes"></a>

```typescript
public readonly expectedCodes: string;
```

- *Type:* string

The expected HTTP response code or code range of the health check.

This parameter is only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#expected_codes LoadBalancerMonitor#expected_codes}

---

##### `followRedirects`<sup>Optional</sup> <a name="followRedirects" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.followRedirects"></a>

```typescript
public readonly followRedirects: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#follow_redirects LoadBalancerMonitor#follow_redirects}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.header"></a>

```typescript
public readonly header: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktf.IResolvable | {[ key: string ]: string[]}

The HTTP request headers to send in the health check.

It is recommended you set a Host header by default. The User-Agent header cannot be overridden. This parameter is only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#header LoadBalancerMonitor#header}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

The interval between each health check.

Shorter intervals may improve failover time, but will increase load on the origins as we check from multiple locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#interval LoadBalancerMonitor#interval}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

The method to use for the health check.

This defaults to 'GET' for HTTP/HTTPS based checks and 'connection_established' for TCP based health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#method LoadBalancerMonitor#method}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The endpoint path you want to conduct a health check against.

This parameter is only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#path LoadBalancerMonitor#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port number to connect to for the health check.

Required for TCP, UDP, and SMTP checks. HTTP and HTTPS checks should only define the port when using a non-standard port (HTTP: default 80, HTTPS: default 443).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#port LoadBalancerMonitor#port}

---

##### `probeZone`<sup>Optional</sup> <a name="probeZone" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.probeZone"></a>

```typescript
public readonly probeZone: string;
```

- *Type:* string

Assign this monitor to emulate the specified zone while probing.

This parameter is only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#probe_zone LoadBalancerMonitor#probe_zone}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

The number of retries to attempt in case of a timeout before marking the origin as unhealthy.

Retries are attempted immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#retries LoadBalancerMonitor#retries}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

The timeout (in seconds) before marking the health check as failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#timeout LoadBalancerMonitor#timeout}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The protocol to use for the health check.

Currently supported protocols are 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'.
Available values: "http", "https", "tcp", "udp_icmp", "icmp_ping", "smtp".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/load_balancer_monitor#type LoadBalancerMonitor#type}

---



